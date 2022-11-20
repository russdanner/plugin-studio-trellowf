package plugins.org.rd.plugin.trellowf

@Grab(group='io.github.http-builder-ng', module='http-builder-ng-core', version='1.0.4', initClass=false)

import org.slf4j.Logger
import org.slf4j.LoggerFactory

import groovy.json.JsonSlurper
import groovyx.net.http.HttpBuilder

import static groovyx.net.http.HttpBuilder.configure

/**
 * API service wrapper for Trello
 */
public class Trello {

    private static final Logger logger = LoggerFactory.getLogger(Trello.class);

    def pluginConfig
    def key
    def token
    def defaultBoardId

    static def responseCache = [:]
    static def hookedBoards = [:]

    def CARD_CACHE_SECONDS = 20
    def BOARD_CACHE_SECONDS = 60
    
   /**
     * constructor
     */
    Trello(pluginConfig) {
        this.pluginConfig = pluginConfig
        this.key = pluginConfig.getString("trelloApiKey")
        this.token = pluginConfig.getString("trelloApiToken")
        this.defaultBoardId = pluginConfig.getString("trelloDefaultBoardId")
    }

    /**
     * Move a card from one list to another
     */
    def moveCard(boardId, listId, cardId) {
        def result = trelloPut("/1/cards/${cardId}?idList=${listId}")
        clearCache(null)
        
        return result
    }

    /**
     * Attach content to a card
     */
    def attachContentToCard(server, name, cardId, siteId, contentId) {
        def studioServer = server
        def contentName = urlEncode(name)
        def attachmentUrl = "${studioServer}/studio/plugin%3Fsite%3D${siteId}%26type%3Dapps%26pluginId%3Dorg.rd.plugin.trellowf%26name%3Dtrellowf%26file%3Dapp.js%23/preview%3FcontentId%3D${contentId}%26siteId%3D${siteId}"
        def result = trelloPost("/1/cards/${cardId}/attachments?name=${contentName}&url=${attachmentUrl}", [:])
        clearCache(null)

        return result
    }

    /**
     * Remove an attachment form a given card
     */
    def removeAttachContentFromCard(cardId, attachmentId) {
        def result = trelloDelete("/1/cards/${cardId}/attachments/${attachmentId}")    
        clearCache(null)
        
        return result
    }

    /**
     * Create a card on a list
     */
    def createCard(listId, title, description, color) {
        def result = trelloPost("/1/cards?idList=${listId}", [:])
        clearCache(null)
    }

    /**
     * Delete a card
     */
    def deleteCard(cardId) {
        def result = trelloDelete("/1/cards/${cardId}")
        clearCache(null)
    }

    /**
     * Get board details
     * @param boardId the board to retrieve
     */
    def getBoard(boardId) {
        def tBoardId = getBoardId(boardId)
        def board = trelloGet("/1/boards/${tBoardId}")
        return board
    }

    /**
     * Get all of the lists on a given board
     * @param boardId the board to retrieve
     */
    def getListsForBoard(boardId) { 
        def cacheKey = "boardAndLists"+boardId
        def result = getCachedResponse(cacheKey, BOARD_CACHE_SECONDS)
       
        if(result == null) {
            result = [:]
            def tBoardId = getBoardId(boardId)
            result.board = getBoard(tBoardId)
            result.lists = trelloGet("/1/boards/${tBoardId}/lists")

            result.lists.each { list -> 
                def cards = getCardsForList(list.id)
                list.cards = cards
            }

            cacheResponse(cacheKey, result)
        }
        
        return result
    }

    /**
     * If boardId is null, default ID is returned
     */
    def getBoardId(boardId) {

        def id = boardId
        if(!boardId || boardId == null || boardId == "") {
            // Use the default board ID if one is not provided
            id = defaultBoardId
        }

        return id
    }

    /**
     * Get all details for a card (attachments, tasks, comments)
     * @param cardId the list of cards to retrieve
     */
    def getDetailsForCard(cardId) {
        def result = [:]

        result.attachments = getAttachmentsForCard(cardId)

        return result
    }

    /**
     * Get all attachments on a card
     * @param cardId the list of cards to retrieve
     */
    def getAttachmentsForCard(cardId) {
        def cacheKey = "attachments${cardId}"
        def attachments = getCachedResponse(cacheKey, CARD_CACHE_SECONDS)
       
        if(attachments == null) {
            attachments = trelloGet("/1/cards/${cardId}/attachments")
            cacheResponse(cacheKey, attachments)
        }

        return attachments
    }

    /**
     * Get all of the cards on a given list
     * @param listId the list of cards to retrieve
     */
    def getCardsForList(listId) {
        def cards = trelloGet("/1/lists/${listId}/cards")
        return cards
    }


    def listHooks() {
        return trelloGet("/1/tokens/${token}/webhooks")
    }

    def deleteHook(id) {
        return trelloDelete("/1/webhooks/${id}")
    }

    def createWebHookWithTrello(serverAddress, siteId, boardId) {
        def boardHookKey = serverAddress+siteId+boardId
        def cachedHook = hookedBoards.get(boardHookKey)

        if(cachedHook == null) {
            def callbackURL = "${serverAddress}/api/plugins/org/rd/plugin/trellowf/trellowf/hook/hook-callback.json?crafterSite=${siteId}&boardId=${boardId}" 

            def existingHooks = listHooks()

            def hookExists = false
            
            if(existingHooks) {
                existingHooks.each { v ->
                    if(v.callbackURL == callbackURL) {
                        hookExists = true  
                    }
                }
            }

            if(!hookExists) {
                def payload = [
                    key: key,
                    callbackURL: callbackURL,
                    idModel: boardId,
                    description: "Monitor Board ${boardId} for Server ${serverAddress}"            
                ]

                def response = null
                
                try {
                    response = trelloPost("/1/tokens/${token}/webhooks", payload)
                }
                catch(err) {
                    println("Error on register hook " + err)
                } 

                if(response) {
                    hookedBoards.put(boardHookKey, [:])    
                }
            }
            else {
                hookedBoards.put(boardHookKey, [:])    
            }
        }
    }

    /**
     * Make a PUT request to Trello
     * @param url - the API URL
     */
    def trelloPut(url) {
        def apiUrl = createTelloApiUrl(url)
        def result = HttpBuilder.configure { request.raw = apiUrl }.put()
        
        return result
    }

    /**
     * Make a POST request to Trello
     * @param url - the API URL
     */
    def trelloPost(url, payload) {
        def apiUrl = createTelloApiUrl(url)
        def result = HttpBuilder.configure { 
            request.raw = apiUrl 
            request.contentType = "application/json" 
            request.body = payload            
        }.post()

        return result
    }

    /**
     * Make a DELETE request to Trello
     * @param url - the API URL
     */
    def trelloDelete(url) {
        def apiUrl = createTelloApiUrl(url)
        def result = HttpBuilder.configure { request.raw = apiUrl }.delete()
        
        return result
    }

    /**
     * Make a get request to Trello
     * @param url - the API URL
     */
    def trelloGet(url) {
        def apiUrl = createTelloApiUrl(url)
        def result = HttpBuilder.configure { request.raw = apiUrl }.get()
    }

    def createTelloApiUrl(url) {
        def qs = (url.indexOf("?")== -1) ? "?" : "&"
        def apiUrl = "https://api.trello.com${url}${qs}key=${key}&token=${token}"
        
        logger.debug("Creating Service URL: ${apiUrl}")
        return  apiUrl       
    }

    /**
     * Manually doing this to avoid sandbox issues
     */
    def urlEncode(value){

        def encodedValue = value
            .replace("%", "%25")
            .replace(" ", "%20")
            .replace("&", "%26")
            .replace("?", "%3F")
            .replace("=", "%3D")

        return encodedValue
    }

    def clearCache(id) {
        logger.debug("Trello Clearing cache (${id})")
        responseCache.clear()
    }

    def cacheResponse(id, response) {
        logger.debug("Trello Caching (${id})")
        def currentTime = System.currentTimeMillis()

        def cachedResponseEntry = [:]
        cachedResponseEntry.time =  currentTime
        cachedResponseEntry.response = response
        
        responseCache.put(id, cachedResponseEntry)
    }

    def getCachedResponse(id, maxAgeSeconds) {
        def result = null
        def currentTime = System.currentTimeMillis()
        def cachedResponseEntry = responseCache.get(id)

        if(cachedResponseEntry) {
            def expires = cachedResponseEntry.time+maxAgeSeconds*1000
            if(currentTime <= expires) {
                logger.debug("Trello Cache hit (${id})")
                result = cachedResponseEntry.response
            }
            else {
               logger.debug("Trello Cache miss due to age (${currentTime} <= ${expires})") 
            }
        }
        else {
            logger.debug("Trello Cache miss (${id} : ${cachedResponseEntry})")
        }

        return result
    }
}
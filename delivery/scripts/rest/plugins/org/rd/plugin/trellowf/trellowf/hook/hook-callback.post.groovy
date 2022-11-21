@Grab(group='io.github.http-builder-ng', module='http-builder-ng-core', version='1.0.4', initClass=false)

import groovyx.net.http.HttpBuilder
import static groovyx.net.http.HttpBuilder.configure

/**
 * This script assumes Studio is running on localhost and that
 * The kan ban board cache we are clearing is in the same site
 */
try{
    def siteId = siteContext.siteName
    def studioServer = "http://localhost:8080"
    def apiUrl = "${studioServer}/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/cache/clear.json?siteId=${siteId}"
    def studioJwtToken = pluginConfig.getString("studioJwtToken")

    HttpBuilder.configure { 
        request.raw = apiUrl
        request.headers['Authorization'] = "Bearer "+studioJwtToken 
    }.get()

}
catch(err) {
    logger.error("Error on notify from Trello", err)
}
return [ message: "Notified"]
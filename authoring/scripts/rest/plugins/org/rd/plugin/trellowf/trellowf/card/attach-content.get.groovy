import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.attachContentToCard(params.server, params.name, params.cardId, params.siteId, params.contentId)
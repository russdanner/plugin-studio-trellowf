import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.attachContentToCard(params.name, params.cardId, params.siteId, params.contentId)
import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.getDetailsForCard(params.cardId)
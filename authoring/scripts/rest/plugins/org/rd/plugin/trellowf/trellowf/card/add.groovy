import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.addCard(params.listId, params.title, params.description, params.color)
import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.createCard(params.listId, params.title, params.description, params.color)
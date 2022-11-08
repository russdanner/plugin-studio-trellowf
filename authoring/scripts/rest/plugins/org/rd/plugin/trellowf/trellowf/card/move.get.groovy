import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.moveCard(params.boardId, params.listId, params.cardId)
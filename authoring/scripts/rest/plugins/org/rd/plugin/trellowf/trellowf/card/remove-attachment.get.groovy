import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.removeAttachContentFromCard(params.cardId, params.attachmentId)
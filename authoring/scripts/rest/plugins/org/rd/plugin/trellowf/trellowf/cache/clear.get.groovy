import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

trello.clearCache(params.id)

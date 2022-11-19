import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

System.out.println("HOOKING")
return trello.createWebHookWithTrello(
		"http://100.36.43.86:8080/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/board/notify-update.json?siteId=t1", 
		"61e2399fbf29ae4e331e986d", 
		"CrafterCMS board monitor");

# Trello Workflow Plugin for CrafterCMS

Add a the ability to view and link to Trello boards in your Studio project

# Installation

Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.
You will need the following information:
- Trello API Key
- Trello API Token
- The ID of a board to load if no `boardId` is provided in the `Sidebar` widget configuration

# Generating Keys for Trello

1. Go to the following URL to generate a Trello API Key
https://trello.com/app-key

2. Invoke the following URL to generate a Trello API Token
https://trello.com/1/authorize?expiration=never&name=CrafterCMS&scope=read,write&response_type=token&key={YOUR_KEY}

You may alter `name` and `expiration` parameters as is desired.

# Adding more than one Trello board to a project
You may add as many boards to your `Sidebar` as you like by adding the widget to Studio's UI.xml and specifying the board ID:
```xml
<widget id="org.rd.plugin.trellowf.openBoardButton">
    <plugin
        id="org.rd.plugin.trellowf"
        site="{site}"
        type="apps"
        name="trellowf"
        file="index.js"
    />
    <configuration>
        <title>News Workflow</title> 
        <icon id="@mui/icons-material/CodeRounded"/>
        <boardId>A0ID0HERE0</boardId>
    </configuration>
</widget>
```

# Enabling Callbacks from Trello
In order for Trello to provide notifications of updates to the Crafter Studio plugin you must allow the call back URL to be called.

1. Edit `CRAFTER_HOME/bin/apache-tomcat/shared/classes/crafter/studio/extension/studio-config-override.yaml`

Add the following value `/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/hook/.*` to the `studio.security.publicUrls` property. 

Example:
`studio.security.publicUrls: >
  /api/1/services/api/1/server/get-available-languages.*,/api/1/services/api/1/server/get-ui-resource-override.*,
  /api/2/monitoring/.+,/api/2/users/forgot_password.*,/api/2/users/set_password.*,/static-assets/.+,
  /api/2/users/validate_token.*,/api/1/services/api/1/security/login.*,/api/2/users/forgot_password.*,
  /api/2/plugin/script/reload.*,/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/hook/.*
`

2. Restart

3. Visit the following URL to register the webhook with Trello
`https://CRAFTERCMS_SERVER/studio/plugin?site=t1&type=apps&pluginId=org.rd.plugin.trellowf&name=trellowf&file=app.js#/registerhook&siteId=SITEID`

# Screenshots
<img width="1446" alt="craftercms-trello-board-screenshot-1" src="https://user-images.githubusercontent.com/169432/198916799-f081ab78-e6ca-4866-9429-4ac746f415df.png">

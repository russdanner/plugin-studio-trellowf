# Trello Workflow Plugin for CrafterCMS

Add a the ability to view and link to Trello boards in your Studio project

# Installation

Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.
You will need the following information:
- Trello API Key
- Trello API Token
- The ID of a board to load if no `boardId` is provided in the `Sidebar` widget configuration


You may add as many boards to your `Sidebar` as you like by adding the widget to Studio's UI.xml and specifying the board ID:
```
    <widget id="org.rd.plugin.trellowf.components.reactComponent">
       <plugin id="org.rd.plugin.trellowf"
               site="{site}"
               type="apps"
               name="trellowf"
               file="index.js"/>
         <configuration>
            <boardId>A0ID0HERE0</boardId>
         </configuration>
    </widget>
```

# Screenshots
<img width="1446" alt="craftercms-trello-board-screenshot-1" src="https://user-images.githubusercontent.com/169432/198916799-f081ab78-e6ca-4866-9429-4ac746f415df.png">

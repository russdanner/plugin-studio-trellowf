# Trello Workflow Plugin for CrafterCMS

Add a the ability to view and link to Trello boards in your Studio project

# Installation

Install the plugin via Studio's Plugin Management UI under Site Tools > Plugin Management.
You will need the following information:
- Trello API Key 
- Trello API Token
- The ID of a board to load if no boardId is provided in the sidebar widget configuration


You may add as many boards to your sidebar as you like by adding the widget to Studio's UI.xml and specifying the board ID:
```
    <widget id="org.rd.plugin.trellowf.components.reactComponent">
       <plugin id="org.rd.plugin.trellowf"
               site="{site}"
               type="apps"
               name="trellowf"
               file="index.modern.js"/>
         <configuration>
            <boardId>A0ID0HERE0</boardId>
         </configuration>
    </widget>
```

import { PluginDescriptor } from '@craftercms/studio-ui';
import Board from './components/Board';
import OpenBoardDialogPanelButton from './components/OpenBoardDialogPanelButton';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.trellowf',
  widgets: {
    'org.rd.plugin.trellowf.openBoardButton': OpenBoardDialogPanelButton,
    'org.rd.plugin.trellowf.board': Board
  }
};

export { OpenBoardDialogPanelButton, Board };

export default plugin;

import * as React from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenBoardDialogPanelButton() {
  const dispatch = useDispatch();
  return (
    <ToolsPanelListItemButton
      icon={{ id: '@mui/icons-material/ContentPasteOutlined' }}
      title="Open Trello Board"
      onClick={() =>
        dispatch(
          showWidgetDialog({
            title: 'Trello Board',
            widget: {
              id: 'org.rd.plugin.trellowf.board'
            }
          })
        )
      }
    />
  );
}

export default OpenBoardDialogPanelButton;

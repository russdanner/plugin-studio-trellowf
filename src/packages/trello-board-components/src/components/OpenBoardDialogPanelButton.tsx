import * as React from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenBoardDialogPanelButton(props) {
  const boardLabel = props.label ? props.label : 'Trello Board'

  const dispatch = useDispatch();
  return (
    <ToolsPanelListItemButton
      icon={{ id: '@mui/icons-material/ContentPasteOutlined' }}
      title={boardLabel}
      onClick={() =>
        dispatch(
          showWidgetDialog({
            title: boardLabel,
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

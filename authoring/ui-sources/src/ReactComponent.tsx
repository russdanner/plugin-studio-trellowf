import * as React from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton'
import Cookies from 'js-cookie'

import {
  IconButton,
  Dialog,
  DialogTitle,
  Card,
  CardHeader,
  Paper,
  Typography,
  Grid,
  Box,
  useTheme
} from '@mui/material'
import { cardClasses } from '@mui/material/Card'

export interface TrelloComponentProps {
  boardId: string
}

const ReactComponent = ({ boardId }: TrelloComponentProps) => {
  React.useEffect(() => {
    dataLoadChannels()

    var intervalRef = setInterval(() => {
      dataLoadChannels()
    }, 10000)
    return function () {
      clearInterval(intervalRef)
    }
  }, [])

  const dataLoadChannels = () => {
    // @ts-ignore
    let siteId = Cookies.get('crafterSite')

    // @ts-ignore
    let serviceUrl =
      '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/board/lists.json' + '?siteId=' + siteId

    if (boardId) {
      serviceUrl += '&boardId=' + boardId
    }

    // @ts-ignore
    CrafterCMSNext.util.ajax.get(serviceUrl).subscribe((response) => {
      setState({ ...state, board: { ...response.response.result.board }, lists: { ...response.response.result.lists } })
    })
  }

  const [open, setOpen] = React.useState(false)

  const darkMode = useTheme().palette.mode === 'dark'

  const [state, setState] = React.useState({
    board: { name: '', url: '', prefs: { backgroundImage: '' } },
    lists: {}
  })

  return (
    <React.Fragment>
      <ToolsPanelListItemButton
        icon={{ id: '@mui/icons-material/AbcRounded' }}
        title={state.board.name}
        onClick={() => setOpen(true)}
      />
      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
        style={{ overflow: 'auto' }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }} id="max-width-dialog-title">
          <Typography>{state.board.name}</Typography>

          <IconButton href={state.board.url} target="new" aria-label="Edit in Trello">
            <EditRoundedIcon />
          </IconButton>
        </DialogTitle>
        <Grid container spacing={2} style={{ backgroundImage: `url(${state.board.prefs.backgroundImage})` }}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="left"
              paddingTop={3}
              paddingBottom={3}
              paddingLeft={3}
              spacing={3}
              style={{ flexFlow: 'row' }}
            >
              {state.lists &&
                Object.entries(state.lists as any).map(([listIdx]) => {
                  let list = state.lists[listIdx]

                  let cards =
                    list.cards &&
                    Object.entries(list.cards as any).map(([cardIdx]) => {
                      let card = list.cards[cardIdx]
                      return (
                        <Card
                          elevation={3}
                          sx={{ borderTop: card.cover.color ? `10px solid ${card.cover.color}` : `` }}
                        >
                          <CardHeader
                            action={
                              <IconButton href={card.url} target="card" aria-label="Edit in Trello">
                                <EditRoundedIcon />
                              </IconButton>
                            }
                            title={card.name}
                            titleTypographyProps={{ variant: 'body1' }}
                          />
                        </Card>
                      )
                    })

                  return (
                    <Paper
                      elevation={1}
                      style={{ margin: '10px' }}
                      sx={{ p: 1, bgcolor: darkMode ? 'grey' : 'grey.A200' }}
                    >
                      <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                        {list.name}
                      </Typography>
                      <Box sx={{ [`.${cardClasses.root}:not(:last-child)`]: { mb: 1 } }}>{cards}</Box>
                    </Paper>
                  )
                })}
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  )
}

export default ReactComponent

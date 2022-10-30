import * as React from 'react'

import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Cookies from 'js-cookie';

import {
  Dialog,
  DialogTitle,
  Card,
  CardHeader,
  Paper,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { cardClasses } from "@mui/material/Card";

export interface ExampleComponentProps {
  boardId: string
}

const ReactComponent = ({boardId}: ExampleComponentProps) => {

  React.useEffect(() => {
    dataLoadChannels()
    
    var intervalRef = setInterval( () => {
        dataLoadChannels()
      },10000)
      return function() {
        clearInterval(intervalRef)
      }
  }, [])

  const dataLoadChannels = () => {
    // @ts-ignore
    let siteId = Cookies.get("crafterSite") 

    // @ts-ignore
    let serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/board/lists.json'
                   + '?siteId='+siteId

    if(boardId) {
      serviceUrl += '&boardId='+boardId
    }
 
    // @ts-ignore
    CrafterCMSNext.util.ajax.get(serviceUrl).subscribe((response) => {
       setState({...state, board:{...response.response.result.board}, lists:{...response.response.result.lists}})
    })
  }

  const [open, setOpen] = React.useState(false)

  const [state, setState] = React.useState({
    board: {name:"", url:"", prefs: {backgroundImage:""}},
    lists: {},
    textColor: (String(useMediaQuery('(prefers-color-scheme: dark)')) === "true") ? 'white' : 'black',
    listBackgroundColor: (useMediaQuery('(prefers-color-scheme: dark)') === true) ? 'grey' : 'grey.A200'
  })

  return (
    <React.Fragment>
       <ToolsPanelListItemButton icon={{ id: '@mui/icons-material/AutoAwesomeMotionOutlined' }} 
                                 title={state.board.name} 
                                 onClick={() => setOpen(true)}/>
    
      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
        style={{overflow: 'auto'}} >

        <DialogTitle id="max-width-dialog-title">
          <a style={{ textDecoration: "none", color: `${state.textColor}` }} href={state.board.url} target="new">{state.board.name}</a>
        </DialogTitle>
          <Grid container spacing={2} style={{ backgroundImage: `url(${state.board.prefs.backgroundImage})` }} >
            <Grid item xs={12}>
              <Grid container justifyContent="left" paddingTop={3} paddingBottom={3} paddingLeft={3}  spacing={3} style={{flexFlow: 'row'}}>
  
              {  state.lists && Object.entries(state.lists as any).map(([listIdx]) => {
                  let list = state.lists[listIdx]

                  let cards = list.cards && Object.entries(list.cards as any).map(([cardIdx]) => {
                    let card = list.cards[cardIdx]
                    return(<Card>
                            <a href={card.url} target="card" style={{ textDecoration: "none", color: state.textColor }}>
                               {  (card.cover.color && card.cover.color != "") ? (
                                    <div style={{ backgroundColor:`${card.cover.color}` }} >&nbsp;</div>
                                  ) : (
                                    <div>&nbsp;</div>
                                  )}
                              <CardHeader style={{ color: state.textColor }} title={card.name} titleTypographyProps={{ variant: 'body1' }} />
                            </a>
                          </Card>)
                  })

                  return (<Paper elevation={1} style={{margin: '10px'}} sx={{ p: 1, bgcolor: state.listBackgroundColor }}>
                            <Typography variant="h6" component="h2" sx={{ mb: 1 }}>{list.name}</Typography>
                              <Box sx={{ [`.${cardClasses.root}:not(:last-child)`]: { mb: 1 } }}>
                                {cards}
                              </Box>
                          </Paper>)
                })
              }
              </Grid>
            </Grid>
          </Grid>

      </Dialog>
    </React.Fragment>
  )
}

export default ReactComponent

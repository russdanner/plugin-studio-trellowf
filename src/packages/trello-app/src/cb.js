(function (craftercms) {
  const {
    libs: {
      React: { createElement, useState, Fragment, useEffect },
      ReactDOMClient: { createRoot },
      MaterialUI: { Button, Typography, Divider },
      ReactRedux: { useSelector }
    },
    components: { CrafterCMSNextBridge, ErrorState, EnhancedDialog, DialogBody },
    services: { sites: sitesServices }
  } = craftercms;

  let elem = document.createElement('div');
  let root = createRoot(elem);

  document.body.appendChild(elem);

	function getParameterByName(name, url = window.location.href) {
	    name = name.replace(/[\[\]]/g, '\\$&');
	    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

  function App() {

    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.user);
    useEffect(() => {

      // route incomming callbacks
      // example callbackUrl
      // /studio/plugin?site=t5&type=apps&name=org/rd/plugin/trellowf&file=cb.js&contentId=/site/components/foo.xml

      const siteId  = getParameterByName("site")
      const contentId  = getParameterByName("contentId")

      if( contentId.indexOf("/site/website") != -1 
      &&  contentId.indexOf("index.xml") != -1  ) {
        // item is a page, direct user to preview
        // use an event but for now whatever...
        const pageUrl = contentId.replace("/site/website", "").replace("/index.xml", "")
        window.location.href = "/studio/preview#/?page="+pageUrl+"&site="+siteId
      }
      else if(contentId.indexOf("/site/") != -1) {
        craftercms.getStore().dispatch({
           type: 'SHOW_EDIT_DIALOG',
           payload: {  type: 'form',
                       site: siteId, 
                       title:'Content', 
                       path: contentId, 
                       readonly: true,
                       authoringBase: (window.craftercms.getStore().getState()).env.authoringBase,
                       isHidden: false,
                       onSaveSuccess: {}
          }
        })
      }
      else if((contentId.indexOf("/static-assets/") != -1)) 
     //   ||   ((contentId.indexOf("/templates/") != -1) 
     //   ||   ((contentId.indexOf("/scripts/") != -1) 
     //   ||   ((contentId.indexOf("/sources/") != -1) 
      {
          if((contentId.indexOf(".png") != -1) 
          || (contentId.indexOf(".gif") != -1)
          || (contentId.indexOf(".jpg") != -1)
          || (contentId.indexOf(".jpeg") != -1)
          || (contentId.indexOf(".svg") != -1)
          || (contentId.indexOf(".webp") != -1)) {
            // invoke isImage
            craftercms.getStore().dispatch({  
              type: 'SHOW_PREVIEW_DIALOG',
              payload: {  type: 'image',
                          title:'Content', 
                          url: contentId, 
              }
            })
          }
          else if((contentId.indexOf(".mp4") != -1)) {
            //  invoke isVideo
            craftercms.getStore().dispatch({  
              type: 'SHOW_PREVIEW_DIALOG',
              payload: {  type: 'video',
                          title:'Content', 
                          url: contentId, 
              }
            })
          }
          else {
            // assume it's just a file of sorts
            // what can I call to clean up these decisions?
            craftercms.getStore().dispatch({  
                type: 'SHOW_PREVIEW_DIALOG',
                payload: {  type: 'editor',
                            title:'Content', 
                            url: contentId,
                }
              })
          }
      }
      else {
        // for anything else, send them to preview / (basically punt, we can't handle request)
        // later change this to the crafter dashboard
        const pageUrl = contentId.replace("/site/website", "").replace("/index.xml", "")
        window.location.href = "/studio/preview#/?page="+pageUrl+"&site="+siteId        
      }
    }, []);

    return createElement(
      'div',
      { style: { textAlign: 'center', margin: '50px auto' } },
      createElement(ErrorState, {
        imageUrl: '/studio/static-assets/images/content_creation.svg',
        title: 'CrafterCMS ❤ Trello',
        message: `Hello ${user?.firstName ?? ''}, we are attempting to process your request.`,
        styles: { image: { width: 250 } }
      }));
  }

  root.render(createElement(CrafterCMSNextBridge, {}, createElement(App)));
})(window.craftercms);
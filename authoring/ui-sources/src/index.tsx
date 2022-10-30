import ReactComponent from './ReactComponent'

const plugin /*: PluginDescriptor */ = {
  id: 'org.rd.plugin.trellowf',
  name: 'Sample component library',
  description: 'An example plugin of a component library',
  author: 'Russ Danner',
  logo: null,
  locales: {},
  apps: [],
  widgets: {
    'org.rd.plugin.trellowf.components.reactComponent': ReactComponent
  },
  scripts: [],
  stylesheets: [],
  themes: []
}

export default plugin

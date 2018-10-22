import Vuetify from 'vuetify'
import * as directives from 'vuetify/es5/directives'

const install = (Vue, theme) => {
  Vue.use(Vuetify, {
    directives,
    theme: theme.colors
    // options: {
    // }
  })
}

export default {
  install
}
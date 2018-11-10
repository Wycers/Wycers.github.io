import i18n from './libs/i18n'
import blog from './libs/blog'
// import essay from './libs/essay'
import VueContentPlaceholders from 'vue-content-placeholders'
// import VueSimplemde from 'vue-simplemde'
import routes from './libs/routes'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import './styles/theme.styl'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  const {
    themeConfig: theme,
    pages
  } = siteData
  Vue.use(i18n, theme.lang)
  Vue.use(VueContentPlaceholders)
  // Vue.use(VueSimplemde)
  Vue.use(blog, {
    theme,
    pages
  })
  Vue.use(Vuetify, {
    theme: {
      primary: colors.blue.darken3, // a color that is not in the material colors palette
      accent: colors.grey.darken3,
      secondary: colors.grey.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  })
  
  Vue.use(routes, {
    router,
    theme
  })
}
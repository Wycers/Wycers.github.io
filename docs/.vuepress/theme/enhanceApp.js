import routes from './enhancers/routes';
import tags from './enhancers/tags';
import optionHandler from './enhancers/optionHandler';
import colors from '../../../node_modules/vuetify/es5/util/colors';
import '../../../node_modules/vuetify/dist/vuetify.min.css';
import '../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'; 

import Vuetify from '../../../node_modules/vuetify'
export default ({ Vue, options, router, siteData }) => {
    const { themeConfig, pages } = siteData;

    Vue.use(optionHandler, { themeConfig });
    Vue.use(routes, { router, themeConfig });
    Vue.use(tags, { router, pages, themeConfig });
    Vue.use(Vuetify, {
        theme: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base // #3F51B5
        }
    })
}
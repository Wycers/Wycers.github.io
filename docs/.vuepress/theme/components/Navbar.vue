<template>
  <header class="navbar">
    <v-toolbar dark color="blue">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">{{ $site.title }}</v-toolbar-title>
      <router-link :to="$localePath" class="home-link">
        <img class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)">
        <span class="site-name"
          v-if="$site.title"
          :class="{ 'can-hide': $site.themeConfig.logo }">
          {{ $site.title }}
        </span>
      </router-link>
      <NavLinks/>
      <div class="links">
        <SearchBox v-if="$site.themeConfig.search !== false"/>
      </div>
      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- <div class="nav-header">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
      <router-link :to="$localePath" class="home-link">
        <img class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)">
        <span class="site-name"
          v-if="$site.title"
          :class="{ 'can-hide': $site.themeConfig.logo }">
          {{ $site.title }}
        </span>
      </router-link>
      <NavLinks class="can-hide"/>
      <div class="links">
        <SearchBox v-if="$site.themeConfig.search !== false"/>
      </div>
    </div> -->
  </header>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import SearchBox from "./SearchBox.vue";
import NavLinks from "./NavLinks.vue";
import { isExternal, isMailto, ensureExt } from '../lib/util'

export default {
  components: { SidebarButton, NavLinks, SearchBox }
};
</script>

<style lang="stylus">
@import '../styles/config.styl';

.nav-header {
  position relative
  padding 0.7rem 1rem
  margin 0 auto
  width $appWidth
  line-height $navbarHeight - 1.4rem
}

.navbar {
  position: relative;

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: $textColor;
    position: relative;
  }

  .links {
    font-size: 0.9rem;
    position: absolute;
    right: 1.5rem;
    top: 0.7rem;
  }
}

@media (max-width ($MQNarrow + 1px))
  .nav-header {
    position static
    width 100%
  }

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;
    
    .can-hide {
      display: none;
    }
  }
}
</style>

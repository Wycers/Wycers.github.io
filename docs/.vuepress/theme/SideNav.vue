<template>
  <div>
    <div class="aside-brand-wrap">
      <div class="aside-brand elevation-1">
        <router-link :to="content.avatarLink" class="aside-avatar elevation-2">
          <img :src="$withBase(content.avatar)" alt="avatar">
        </router-link>
        <hgroup class="mt-3 variant-hide aside-group white--text">
          <div class="headline">{{content.author}}</div>
          <a :title="content.email" class="aside-mail white--text">{{content.email}}</a>
          <p class="subheading mt-1 aside-description">{{ $description }}</p>
        </hgroup>
      </div>
    </div>
    <v-divider dark></v-divider>
    <v-list class="nav-list">
      <v-list-tile ripple :exact="item.url === '/'" v-for="item in content.menus" :key="item.text" :to="!item.external ? item.url : null" :href="item.external ? item.url : null" :target="item.external ? '_blank' : null" exact-active-class="nav-active" color="secondary">
        <v-list-tile-avatar>
          <i :class="item.icon"></i>
        </v-list-tile-avatar>
        <v-list-tile-content>{{item.text}}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  name: '',
  computed: {
    content() {
      return this.$site.themeConfig;
    }
  }
};
</script>
<style lang="stylus">
@import './styles/config.styl';

.nav-active {
  .nav-icon {
    color: inherit;
  }
}

.nav-list {
  .list__tile {
    font-weight: 500;
  }
}

.aside {
  &-brand {
    padding: 48px 24px 24px;
    background: rgba(black, 0.4);
    transition: 0.2s ease-in-out;
    text-shadow: 3px 3px 5px #000000;
  }

  &-brand-wrap {
    background-image: url('./imgs/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  &-description {
    font-family: $font-roboto
  }

  &-avatar {
    display: block;
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    transition: 0.2s ease-in-out;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &-group {
    border-radius 5px
    padding: 2px
  }
  &-mail {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.navigation-drawer--mini-variant {
  .variant-hide {
    display: none;
  }

  .aside {
    &-brand {
      padding: 8px 16px;
      background: #fff;
    }

    &-avatar {
      width: 48px;
      height: 48px;
    }
  }
}
</style>

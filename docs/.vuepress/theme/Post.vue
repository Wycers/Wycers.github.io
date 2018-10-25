<template>
  <v-container grid-list-xl align-center class="blog-container">
    <v-layout row wrap>
      <v-flex xs12 class="mb-3">
        <PostCard :post="$page" :shadowZ="16" layout="post">
          <Content></Content>
        </PostCard>
      </v-flex>
      <v-flex xs6 class="text-xs-left">
        <v-btn flat :to="$postNav.prev.path" v-if="$postNav.prev" class="post-nav">
          <div class="grey--text">
            <i class="fa mr-1 fa-chevron-left"></i>{{$tt('postNav_prev')}}</div>
          <div class="title mt-1 primary--text hidden-xs-only">{{$postNav.prev.title}}</div>
        </v-btn>
      </v-flex>
      <v-flex xs6 class="text-xs-right">
        <v-btn flat :to="$postNav.next.path" v-if="$postNav.next" class="post-nav">
          <div class="grey--text">{{$tt('postNav_next')}}
            <i class="fa ml-1 fa-chevron-right"></i>
          </div>
          <div class="title mt-1 primary--text hidden-xs-only">{{$postNav.next.title}}</div>
        </v-btn>
      </v-flex>
      <v-flex xs12 class="mt-3">
        <div id="gitalk-container"></div>
      </v-flex>
    </v-layout>
    <post-toc />
  </v-container>
</template>
<script>
import PostCard from './components/PostCard';
// import Comment from './components/Comment';
import PostToc from './components/PostToc';
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

export default {
  components: {
    PostCard,
    // Comment,
    PostToc
  },
  mounted () {
    const gitalk = new Gitalk({
      clientID: '9177e010a77733962ec3',
      clientSecret: '927d778b40b56948aa055b2f7ab7cb24c40e1168',
      repo: 'Wycers.github.io',
      owner: 'Wycers',
      admin: ['Wycers'],
      id: location.pathname,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-container')
  }
};
</script>
<style lang="stylus">
@import './styles/config.styl';

.post-nav {
  &.btn {
    height: auto;
  }

  .btn__content {
    flex-direction: column;
    align-items: normal;
    padding: 8px 16px;
  }
}
</style>

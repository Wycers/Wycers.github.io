<template lang="pug">
div(style="height: 100%")
  v-layout(align-center column justify-center ma-5)
    h1.display-2.font-weight-thin.mb-3 Not Found
    h4.subheading.mb-5 How could you get here?
    

    blockquote.blockquote(style="max-width: 60%")
      | &#8220;
      | {{ hitokoto }}
      | &#8221;
      v-spacer
      footer(style="text-align:right")
        small
          em &mdash; {{ from }}
    img(:src="bg")
    v-layout(row wrap)
      v-flex 
        v-btn(@click="refresh") 刷新一言
      v-flex(xs6) 
        v-btn.black--text(to="/") 回到主页
</template>
<script>
import axios from 'axios'
export default {
  name: 'NotFound',
  data() {
    return {
      bg: require('../public/404.gif'),
      hitokoto: 'qwq',
      from: 'qwq',
      value: 0,
      buffer: 10,
      bufferValue: 20,
      interval: 0
    };
  },
  mounted () {
    this.startBuffer()
    this.refresh()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        this.buffer += 1
      }, 100)
    },
    refresh () {
      axios.get('https://v1.hitokoto.cn').then((res) => {
        if (res.status === 200) {
          this.hitokoto = res.data.hitokoto
          this.from = res.data.from
          console.log(res)
        }
      })
    }
  }
}
</script>
<style lang="stylus">
#app
  height 100%
.container
  width 100%
  height 100%
</style>

<template lang="pug">
  v-btn(
    flat
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'"
  ) {{item.text}} 
  v-btn(
    v-else
    flat
    :href="link"
    class="nav-link"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'"
    tag="a"
  ) 
    span {{ item.text }} 
</template>

<script>
import { isExternal, isMailto, ensureExt } from '../lib/util'

export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link)
    }
  },
  methods: {
    isExternal,
    isMailto
  }
}
</script>

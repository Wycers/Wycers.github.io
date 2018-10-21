<template>
  <v-btn flat
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'"
  > {{item.text}} </v-btn>
  <a
    v-else
    :href="link"
    class="nav-link"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'"
  >{{ item.text }}</a>
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

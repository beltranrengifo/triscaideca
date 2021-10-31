<template>
  <h1 class="logo" :class="{ 'logo--small': small }" title="Triscaideca">
    <n-link :to="link">
      <img :src="getLogoImage" :alt="altText" title="Triscaideca" />
    </n-link>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Logo',

  props: {
    link: {
      type: String,
      default: '/',
    },
    logo: {
      type: String,
      default: 'triscaideca-logo-v2.svg',
    },
    altText: {
      type: String,
      default: 'Triscaideca Logo',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    getLogoImage(): string {
      return require(`@/assets/images/${this.logo}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.logo {
  width: rem(360);

  &--small {
    width: rem(160);
  }
}
</style>

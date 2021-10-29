<template>
  <div class="logo w-8 sm:w-12">
    <n-link :to="link">
      <img :src="getLogoImage" :alt="altText" />
    </n-link>
  </div>
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
      default: 'triscaideca-black-logo.svg',
    },
    altText: {
      type: String,
      default: 'Triscaideca Logo',
    },
  },

  computed: {
    getLogoImage(): string {
      return require(`@/assets/images/${this.logo}`)
    },
  },
})
</script>

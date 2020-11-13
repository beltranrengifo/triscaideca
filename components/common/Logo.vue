<template>
  <div class="logo" :style="getStyles">
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
    width: {
      type: String,
      default: '50px',
    },
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
    getStyles(): string {
      return `width: ${this.width}`
    },

    getLogoImage(): string {
      return require(`@/assets/images/${this.logo}`)
    },
  },
})
</script>

<style scoped lang="scss"></style>

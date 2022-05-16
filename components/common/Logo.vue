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
      default: 'triscaideca_logo_circular.svg',
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
  img {
    height: rem(110);
    transition: height 0.1s ease-out;

    @include breakpoint(sm) {
      height: rem(200);
    }
  }

  &--small {
    img {
      height: rem(90);
      @include breakpoint(sm) {
        height: rem(100);
      }
    }
  }
}
</style>

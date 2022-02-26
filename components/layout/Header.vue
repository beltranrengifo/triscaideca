<template>
  <header
    class="main-header flex justify-between flex-shrink-0"
    :class="{ 'main-header--sticky': showStickyHeader }"
  >
    <Logo :small="showStickyHeader" />
    <Navigation :compact="showStickyHeader" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import throttle from 'lodash/throttle'

const STICKY_HEADER_THRESHOLD = 216

export default Vue.extend({
  name: 'Header',

  data() {
    return {
      handleDebouncedScroll: null,
      showStickyHeader: false,
    }
  },

  methods: {
    handleScroll(event): void {
      this.showStickyHeader = window.scrollY > STICKY_HEADER_THRESHOLD
    },
  },

  mounted(): void {
    this.handleDebouncedScroll = throttle(this.handleScroll, 300)
    window.addEventListener('scroll', (this as any).handleDebouncedScroll)
  },

  beforeDestroy(): void {
    window.removeEventListener('scroll', (this as any).handleDebouncedScroll)
  },
})
</script>

<style lang="scss" scoped>
.main-header {
  overflow: hidden;
  padding: rem(8) rem(16);

  &--sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: var(--color-dark);
    padding: rem(4) rem(8);
    transition: all 0.1s ease-out;
  }
}
</style>

<template>
  <div
    class="main-nav__mobile-overlay"
    :class="{ 'main-nav__mobile-overlay--active': active }"
    @click="handleOverlayClick"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MobileOverlay',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  mounted(): void {
    document.addEventListener('keyup', (evt) => {
      evt.keyCode === 27 && this.$emit('onOverlayClick')
    })
  },

  methods: {
    handleOverlayClick(): void {
      this.$emit('onOverlayClick')
    },
  },
})
</script>

<style lang="scss" scoped>
.main-nav {
  $--self: &;

  &__mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: var(--color-dark);
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease-out;

    &--active {
      opacity: 0.8;
    }
  }
}
</style>

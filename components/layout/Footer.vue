<template>
  <container
    tag="footer"
    class="main-footer"
    :class="{ 'main-footer--with-mobile-menu': isMobileMenuVisible }"
  >
    <div>
      <Logo />
      <p class="mt-1 pl-4">
        <small class="text-xs">
          {{ copy }}
        </small>
      </p>
    </div>
    <Navigation
      :compact="$state.showStickyHeader"
      @onCloseMenu="handleMobileMenuClose"
      @onOpenMenu="isMobileMenuVisible = true"
    />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  data() {
    return {
      isMobileMenuVisible: false,
    }
  },

  computed: {
    copy(): string {
      return `© ${new Date().getFullYear()}`
    },
  },

  methods: {
    handleMobileMenuClose(): void {
      setTimeout(() => (this.isMobileMenuVisible = false), 400)
    },
  },
})
</script>

<style lang="scss">
.main-footer {
  padding: rem(64) rem(32);
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  z-index: -1;

  &--with-mobile-menu {
    z-index: 1;
  }
}
</style>

<template>
  <container tag="footer" class="main-footer">
    <div>
      <Logo />
      <p class="mt-1 pl-4">
        <small class="text-xs">
          {{ copy }}
        </small>
      </p>
    </div>
    <Navigation />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  computed: {
    copy(): string {
      return `© ${new Date().getFullYear()}`
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
}
</style>

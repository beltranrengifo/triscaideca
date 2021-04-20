<template>
  <div v-if="$route.path === '/'" class="sm:mr-6 mt-4 sm:mt-0 view-switcher">
    <span
      class="cursor-pointer"
      :class="{ active: $state && !$state.listView }"
      @click="handleSwitcher(false)"
    >
      {{ $t('viewSwitcher.carousel') }}
    </span>
    <span> / </span>
    <span
      class="cursor-pointer"
      :class="{ active: $state && $state.listView }"
      @click="handleSwitcher(true)"
    >
      {{ $t('viewSwitcher.list') }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ViewSwitcher',

  methods: {
    handleSwitcher(val): void {
      this.$state.mutate('listView', val)
    },
  },
})
</script>

<style lang="scss" scoped>
.view-switcher {
  .active {
    position: relative;
    transition: all 0.2s ease-out;
    &:after {
      content: '';
      width: 100%;
      margin-left: rem(-3);
      height: rem(4);
      background-color: var(--color-primary);
      position: absolute;
      bottom: rem(8);
      left: 0;
      opacity: 0.5;
      transition: all 0.2s ease-out;
      z-index: -1;
      pointer-events: none;
    }
  }
}
</style>

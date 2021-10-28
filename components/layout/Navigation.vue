<template>
  <nav class="main-nav">
    <ul class="main-nav__ul flex pt-4">
      <li
        v-for="(value, key) in $t('navigation')"
        :key="key"
        class="main-nav__item"
      >
        <n-link
          :to="`/${key === 'projects' ? '' : key}`"
          class="font-light uppercase"
        >
          {{ value }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
})
</script>

<style lang="scss" scoped>
.main-nav {
  &__item {
    transform: rotate(-32deg);
    margin: 0;
    min-width: 75px;

    a {
      display: block;
      transition: transform 0.2s ease-out;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: rem(420);
        height: 1px;
        background-color: var(--color-base);
      }

      &.nuxt-link-exact-active {
        transform: translateX(-100%);
      }
    }
  }
}
</style>

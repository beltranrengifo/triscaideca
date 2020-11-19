<template>
  <nav>
    <ul class="flex">
      <li v-for="(value, key) in $t('navigation')" :key="key" class="mx-6">
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

<style scoped lang="scss">
.nuxt-link-exact-active {
  color: var(--color-primary);
  position: relative;
  &:after {
    content: '';
    height: rem(2);
    background: var(--color-primary);
    width: 100%;
    position: absolute;
    bottom: rem(-10);
    left: 0;
  }
}
</style>

<template>
  <container tag="footer" class="main-footer">
    <div>
      <Logo small />
      <p class="mt-1">
        <small class="text-xs">
          {{ copy }}
        </small>
      </p>
    </div>
    <ul class="footer__nav">
      <li
        v-for="(value, key) in $t('navigation')"
        :key="key"
        class="footer__nav-item mb-2"
      >
        <n-link :to="`/${key === 'projects' ? '' : key}`" class="uppercase">
          {{ value }}
        </n-link>
      </li>
    </ul>
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
  padding: rem(164) rem(16) rem(64);
  position: relative;
  display: flex;
  justify-content: space-between;

  &:before {
    content: '';
    height: 1px;
    background-color: var(--color-base);
    position: absolute;
    width: 60%;
    left: 20%;
    top: 74px;
  }

  .nuxt-link-exact-active {
    border-bottom: 1px solid;
  }
}
</style>

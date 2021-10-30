<template>
  <nav class="main-nav">
    <div
      v-if="isMobileMenuBreakpoint && !showMobileMenu"
      class="main-nav__mobile-menu-button"
    >
      <button @click="showMobileMenu = true">Menú</button>
    </div>

    <div
      class="main-nav__inner"
      :class="{ 'main-nav__inner--mobile-menu-active': showMobileMenu }"
    >
      <ul class="main-nav__ul flex pt-4">
        <li
          v-if="isMobileMenuBreakpoint"
          class="main-nav__item main-nav__item--mobile-close"
        >
          <button @click="showMobileMenu = false">X</button>
        </li>
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
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',

  data(): object {
    return {
      isMobileMenuBreakpoint: false,
      showMobileMenu: false,
    }
  },

  mounted(): void {
    this.handleIsMobileMenuBreakpoint()
    window.addEventListener('resize', this.handleIsMobileMenuBreakpoint)
  },

  methods: {
    handleIsMobileMenuBreakpoint(): void {
      ;(this as any).isMobileMenuBreakpoint =
        window.matchMedia('(max-width: 767px)').matches
    },
  },
})
</script>

<style lang="scss" scoped>
.main-nav {
  $--self: &;

  @include breakpoint(only-phone) {
    display: flex;
    align-items: center;
  }

  &__mobile-menu-button {
    button {
      text-transform: uppercase;
      border: 1px solid;
      padding: 10px 16px;
    }
  }

  &__inner {
    @include breakpoint(only-phone) {
      width: 65%;
      min-width: 260px;
      position: fixed;
      right: 0;
      top: 0;
      background: rgb(152 138 101 / 90%);
      height: 100vh;
      z-index: 99;
      transform: translateX(100%);
      transition: transform 0.2s ease-out;

      &--mobile-menu-active {
        transform: translateX(0);
      }

      #{$--self}__ul {
        flex-direction: column;
        padding-left: 20px;
      }

      #{$--self}__item {
        font-size: 28px;
        color: var(--color-light);

        &:not(:last-child) {
          margin-bottom: rem(32);
        }

        &--mobile-close {
          font-size: 36px;
          cursor: pointer;
        }
      }

      a {
        position: relative;
        display: block;
        transition: margin-left 0.2s ease-out;

        &::after {
          content: '';
          height: 1px;
          background-color: var(--color-light);
          position: absolute;
          bottom: 9px;
          left: 0;
          width: 100%;
          opacity: 0.9;
        }

        &.nuxt-link-exact-active {
          margin-left: 35%;
        }
      }
    }
  }

  @include breakpoint(sm) {
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
}
</style>

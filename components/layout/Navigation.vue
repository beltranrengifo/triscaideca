<template>
  <nav class="main-nav" :class="{ 'main-nav--compact': compact }">
    <div
      v-if="isMobileMenuBreakpoint && !showMobileMenu"
      class="main-nav__mobile-menu-button"
    >
      <button @click="showMobileMenu = true">Menú</button>
    </div>

    <div
      class="main-nav__inner h-full"
      :class="{ 'main-nav__inner--mobile-menu-active': showMobileMenu }"
    >
      <ul class="main-nav__ul flex flex-col justify-center h-full">
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
            class="font-bold uppercase"
            :class="{
              'is-project-view': isProjectLink(key),
            }"
            exact
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

  props: {
    compact: {
      type: Boolean,
      default: false,
    },
  },

  data(): object {
    return {
      isMobileMenuBreakpoint: false,
      showMobileMenu: false,
    }
  },

  computed: {
    isProjectLink(): object {
      return (itemPath): boolean | undefined => {
        if (!process.browser) return

        return (
          this.$route?.name?.includes('projects-slug') &&
          itemPath === 'projects'
        )
      }
    },
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
      a {
        display: block;
        transition: all 0.2s ease-out;
        font-size: rem(20);
        color: var(--color-primary);
        position: relative;
        transition: all 0.2s ease-out;

        &:after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 2px;
          width: 100vh;
          height: 1px;
          background-color: var(--color-primary);
        }

        &.nuxt-link-active,
        &.is-project-view {
          transform: translateX(-100%);
          color: var(--color-secondary);

          &:after {
            background-color: var(--color-secondary);
          }
        }
      }
    }
  }

  &--compact {
    #{$--self}__item {
      a {
        font-size: rem(14);

        &:after {
          bottom: 3px;
        }
      }
    }
  }
}
</style>

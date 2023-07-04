<template>
  <div class="project-title-with-meta">
    <div class="project-title-with-meta__inner">
      <h2 class="project-title-with-meta__title">
        <span class="relative" v-html="breakSpaces(title)" />
      </h2>
      <div
        class="project-title-with-meta__description relative"
        v-if="description"
      >
        {{ description }}
      </div>
      <ul class="project-title-with-meta__tags">
        <li v-for="(tag, index) in getTagsAsArray(tags)" :key="tag">
          <span
            :class="{
              uppercase: !index,
            }"
            >{{ tag }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GlobalMixin from '@/mixins/index.vue'
import { breakSpaces } from '@/filters/index'

export default Vue.extend({
  name: 'ProjectTitleWithMeta',

  mixins: [GlobalMixin],

  props: {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    breakSpaces() {
      return (str) => breakSpaces(str)
    },
  },
})
</script>

<style lang="scss" scoped>
.project-title-with-meta {
  &__inner {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }

  &__title {
    font-size: rem(24);
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    color: var(--color-primary);
    position: relative;
    margin-bottom: 6px;

    span {
      &:after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 3px;
        width: 100%;
        height: 2px;
        background-color: var(--color-primary);
      }
    }

    @include breakpoint(sm) {
      font-size: rem(28);

      span {
        &:after {
          bottom: 6px;
          height: 3px;
        }
      }
    }
    @include breakpoint(md) {
      font-size: rem(32);

      span {
        &:after {
          bottom: 6px;
        }
      }
    }
    @include breakpoint(ml) {
      font-size: rem(36);

      span {
        &:after {
          bottom: 9px;
        }
      }
    }
    @include breakpoint(lg) {
      bottom: 12px;
      font-size: rem(44);
    }
  }

  &__description {
    bottom: 10px;
  }

  &__tags {
    li {
      span {
        font-size: rem(16);
        line-height: 1;
        color: var(--color-primary);
        position: relative;

        &:after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 2px;
          width: 100%;
          height: 1px;
          background-color: var(--color-primary);
        }

        @include breakpoint(md) {
          font-size: rem(24);
        }
      }
    }
  }
}
</style>

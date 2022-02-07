<template>
  <div class="project-title-with-meta">
    <div class="project-title-with-meta__inner">
      <h2 class="project-title-with-meta__title">
        <span class="relative" v-html="breakSpaces(title)" />
      </h2>
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
    font-size: rem(44);
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.06;
    color: var(--color-primary);
    position: relative;
    margin-bottom: rem(16);

    span {
      &:after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 3px;
        width: 100%;
        height: 3px;
        background-color: var(--color-primary);
      }
    }
  }

  &__tags {
    li {
      span {
        font-size: rem(24);
        line-height: 1.2;
        color: var(--color-primary);
        position: relative;

        &:after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 2px;
          width: 100%;
          height: 2px;
          background-color: var(--color-primary);
        }
      }

      &:not(:first-child) {
        margin-top: 6px;
      }
    }
  }
}
</style>

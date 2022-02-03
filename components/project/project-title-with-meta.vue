<template>
  <div class="project-title-with-meta">
    <h2 class="project-title-with-meta__title">{{ title.trim() }}</h2>
    <ul class="project-title-with-meta__tags">
      <li v-for="tag in getTagsAsArray(tags)" :key="tag">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GlobalMixin from '@/mixins/index.vue'

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
})
</script>

<style lang="scss" scoped>
.project-title-with-meta {
  display: flex;
  flex-direction: column;
  text-transform: capitalize;

  &__title {
    font-size: rem(44);
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.06;
    color: var(--color-primary);
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 3px;
      left: 2px;
      width: 100%;
      height: 3px;
      background-color: var(--color-primary);
    }
  }

  &__tags {
    margin-top: 8px;

    li {
      font-size: rem(24);
      line-height: 1;
      text-transform: uppercase;
      color: var(--color-primary);

      &:not(:first-child) {
        margin-top: 2px;
      }
    }
  }
}
</style>

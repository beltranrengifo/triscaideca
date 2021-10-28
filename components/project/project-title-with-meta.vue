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
    text-transform: uppercase;
    line-height: 1.06;

    @include breakpoint(sm) {
      max-width: 66%;
    }
  }

  &__tags {
    margin-top: 8px;

    li {
      font-size: rem(24);
      line-height: 1;
      text-transform: uppercase;

      &:not(:first-child) {
        margin-top: 2px;
      }
    }
  }
}
</style>

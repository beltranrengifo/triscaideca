<template>
  <section class="single-project-section">
    <div class="single-project-section__inner">
      <figure
        @click="$emit('imageClicked')"
        class="single-project-section__image"
      >
        <img
          :src="imageUrl(image)"
          :alt="`Proyecto de Triscaideca - ${title}`"
        />
      </figure>
      <project-title-with-meta
        v-if="title"
        :title="title"
        :tags="tags"
        tag="h2"
        class="ml-12"
      />
      <div v-else class="single-project-section__title-placeholder">
        <p />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'
import GlobalMixin from '@/mixins/index.vue'

export default Vue.extend({
  name: 'SingleProjectSection',

  mixins: [GlobalMixin],

  props: {
    title: {
      type: String,
      default: '',
    },
    tags: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.single-project-section {
  $--self: &;

  &__inner {
    display: flex;
    align-items: center;
    margin-bottom: rem(34);
  }

  &__image,
  &__title {
    width: 50%;
  }

  &__image {
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  &__title {
    padding-left: rem(48);
  }

  &:nth-child(even) {
    #{$--self}__inner {
      flex-direction: row-reverse;
    }
  }
}
</style>

<template>
  <section class="single-project-section">
    <div
      class="single-project-section__inner"
      :class="{ 'single-project-section__inner--has-title': title }"
    >
      <figure
        @click="$emit('imageClicked')"
        class="single-project-section__image"
      >
        <img
          :src="imageUrl(image)"
          :alt="`Proyecto de Triscaideca - ${title}`"
        />
      </figure>
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
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: rem(34);

    @include breakpoint(sm) {
      flex-direction: row;
    }
  }

  &__image {
    cursor: pointer;
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <section class="single-project masonry__wrapper">
    <project-title-with-meta
      :title="project.title"
      :tags="project.tags"
      tag="h2"
      class="mb-24 masonry__item"
    />
    <project-single-section
      class="masonry__item"
      v-for="image in project.images"
      :key="image"
      :image="image"
      @imageClicked="
        handleImageLightbox({ show: true, image, title: project.title })
      "
    />
    <image-lightbox
      v-show="showImageLightbox"
      :active="showImageLightbox"
      @handleClose="handleImageLightbox({ show: false })"
      @handlePrev="handleImageNav(-1)"
      @handleNext="handleImageNav(1)"
      :image="ligthboxImage"
      :alt="ligthboxTitle"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'

export default Vue.extend({
  name: 'ProjectSingle',

  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },

  data() {
    return {
      ligthboxImage: '',
      ligthboxTitle: '',
      showImageLightbox: false,
    }
  },

  computed: {
    getLinkTag(): string {
      return this.project.link ? 'a' : 'span'
    },

    getLinkProps(): object | null {
      return this.project.link
        ? {
            href: this.project.link,
            target: '_blank',
          }
        : null
    },
  },

  methods: {
    handleImageLightbox({ show, image = '', title = '' }): void {
      this.showImageLightbox = show
      this.ligthboxImage = image
      this.ligthboxTitle = title
    },

    handleImageNav(action) {
      let index = this.project.images.findIndex(
        (image) => image === this.ligthboxImage
      )

      const totalLengthMinusOne = this.project.images.length - 1

      if (!index && action === -1) {
        index = totalLengthMinusOne
      } else if (index === totalLengthMinusOne && action === 1) {
        index = 0
      } else {
        index = index + action
      }

      this.ligthboxImage = this.project.images[index]
    },
  },
})
</script>

<style lang="scss" scoped>
.single-project {
  padding: rem(16);
  background-image: url('~@/assets/images/lines_2.svg');
  background-repeat: repeat-y;
  background-size: contain;

  @include breakpoint(md) {
    padding: rem(48);
  }
}
</style>

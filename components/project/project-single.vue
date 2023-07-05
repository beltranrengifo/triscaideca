<template>
  <section
    class="single-project masonry__wrapper"
    :class="{
      'masonry__wrapper--full-width-single-image': project.images.length === 1,
    }"
  >
    <project-title-with-meta
      :title="project.title"
      :description="project.description"
      :tags="project.tags"
      tag="h2"
      class="mb-24 masonry__item"
    />
    <project-single-section
      v-for="image in project.images"
      :key="image"
      class="masonry__item"
      :image="image"
      @imageClicked="
        handleImageLightbox({ show: true, image, title: project.title })
      "
    />
    <image-lightbox
      v-show="showImageLightbox"
      :active="showImageLightbox"
      :image="ligthboxImage"
      :alt="ligthboxTitle"
      @handleClose="handleImageLightbox({ show: false })"
      @handlePrev="handleImageNav(-1)"
      @handleNext="handleImageNav(1)"
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

  &:after {
    @include use-fixed-background('~@/assets/images/lines_2.svg');
  }

  @include breakpoint(md) {
    padding: rem(48);
  }
}
</style>

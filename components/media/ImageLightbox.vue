<template>
  <transition name="slide-fade">
    <div class="image-lightbox" ref="slider">
      <figure class="image-lightbox__figure">
        <img class="image-lightbox__image" :src="imageUrl(image)" alt="" />
      </figure>
      <div class="image-lightbox__actions">
        <button class="mr-4" @click="$emit('handlePrev')">&lt; Ant.</button>
        <button @click="$emit('handleNext')">Sig. ></button>
        <span class="mx-4"> | </span>
        <button @click="$emit('handleClose')">Cerrar X</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import GlobalMixin from '@/mixins/index.vue'

export default Vue.extend({
  name: 'ImageLightbox',

  mixins: [GlobalMixin],

  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Triscaideca',
    },
    active: {
      type: Boolean,
      required: false,
    },
  },

  data(): object {
    return {
      touchstartX: null,
      touchendX: null,
    }
  },

  watch: {
    active(val): void {
      document.body.classList[val ? 'add' : 'remove']('lock-scroll')
    },
  },

  mounted(): void {
    document.addEventListener('keyup', (evt) => {
      evt.keyCode === 27 && this.$emit('handleClose')
      evt.keyCode === 37 && this.$emit('handlePrev')
      evt.keyCode === 39 && this.$emit('handleNext')
    })

    this.$refs.slider.addEventListener('touchstart', (e) => {
      this.touchstartX = e.changedTouches[0].screenX
    })

    this.$refs.slider.addEventListener('touchend', (e) => {
      this.touchendX = e.changedTouches[0].screenX
      this.handleGesture()
    })
  },

  methods: {
    handleGesture(): void {
      this.touchendX < this.touchstartX
        ? this.$emit('handlePrev')
        : this.$emit('handleNext')
    },
  },
})
</script>

<style lang="scss" scoped>
.image-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--color-light);

  &__figure {
    width: 100%;
    height: 100%;
  }

  &__image {
    width: auto;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }

  &__figure {
    padding: rem(32);
  }

  &__actions {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 32px;
    background-color: var(--color-light);
  }
}
</style>

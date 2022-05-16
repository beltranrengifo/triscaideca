<template>
  <transition name="slide-fade">
    <div ref="slider" class="image-lightbox">
      <figure v-if="image" class="image-lightbox__figure">
        <img class="image-lightbox__image" :src="imageUrl(image)" alt="" />
      </figure>
      <div class="image-lightbox__actions">
        <button class="mr-4" @click="$emit('handlePrev')">
          Anterior (Izq.)
        </button>
        <button @click="$emit('handleNext')">Siguiente (Dcha.)</button>
        <span class="mx-4"> | </span>
        <button @click="$emit('handleClose')">Cerrar (Esc)</button>
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
    ;(this as any).$refs.slider.addEventListener('touchstart', (e) => {
      ;(this as any).touchstartX = e.changedTouches[0].screenX
    })
    ;(this as any).$refs.slider.addEventListener('touchend', (e) => {
      ;(this as any).touchendX = e.changedTouches[0].screenX
      this.handleGesture()
    })
  },

  methods: {
    handleGesture(): void {
      ;(this as any).touchendX < (this as any).touchstartX
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
  background-color: var(--color-dark);

  &__figure {
    width: 100%;
    height: 100%;
  }

  &__image {
    width: auto;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
    filter: drop-shadow(0px 3px 25px $--color-drop-shadow);
  }

  &__figure {
    padding: rem(32);
  }

  &__actions {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 20px;
    background-color: transparent;
    color: var(--color-primary);
  }
}
</style>

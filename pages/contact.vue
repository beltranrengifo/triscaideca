<template>
  <div class="contact">
    <container tag="section" class="font-light contact__body">
      <div class="contact__column contact__column--image">
        <figure>
          <img
            src="@/assets/images/serinac-triscaideca-contact.jpg"
            alt="Triscaideca Contacto"
          />
        </figure>
      </div>
      <div class="contact__column contact__column--content">
        <div class="contact__content">
          <p>{{ contact.content }}</p>
          <ul class="contact__contact-list">
            <li v-for="contact in contact.contactList" :key="contact.name">
              <span class="contact__contact-list-name">
                {{ contact.name }}:
              </span>
              <span class="contact__contact-list-data">{{ contact.data }}</span>
            </li>
          </ul>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contact',

  async asyncData({ $content }): Promise<Object> {
    return {
      contact: await $content('pages', 'contact').fetch(),
    }
  },
})
</script>

<style lang="scss" scoped>
.contact {
  &__body {
    display: flex;
    flex-direction: column;
    @include breakpoint(sm) {
      flex-direction: row;
    }
  }
  &__column {
    &--image {
      width: 100%;

      @include breakpoint(sm) {
        width: 50%;

        img {
          min-height: 400px;
          object-fit: cover;
        }
      }

      @include breakpoint(md) {
        width: 60%;
        img {
          min-height: auto;
          object-fit: initial;
        }
      }
    }
    &--content {
      width: 100%;

      @include breakpoint(sm) {
        width: 50%;
      }

      @include breakpoint(md) {
        width: 40%;
      }
    }
  }
  &__content {
    width: 100%;
    padding: 0 rem(24);
    margin: 48px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: rem(18);

    @include breakpoint(sm) {
      width: 350px;
      margin: 0 auto;
      padding: 0;
    }
  }

  &__contact-list {
    font-size: rem(22);
    margin-top: rem(48);
  }

  &__contact-list-name {
    opacity: 0.7;
  }
}
</style>

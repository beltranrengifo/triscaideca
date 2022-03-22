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
              <span v-if="contact.name" class="contact__contact-list-name">
                {{ contact.name }}
              </span>
              <a
                :href="getItemHref(contact)"
                target="_blank"
                class="contact__contact-list-data"
                >{{ contact.data }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/28750+San+Agust%C3%ADn+del+Guadalix,+Madrid/@40.6802742,-3.6225501,16z/data=!3m1!4b1!4m5!3m4!1s0xd43d1a200e70e0d:0x1db130f41af8ab09!8m2!3d40.6788466!4d-3.6163061'

export default Vue.extend({
  name: 'Contact',

  async asyncData({ $content }): Promise<Object> {
    return {
      contact: await $content('pages', 'contact').fetch(),
    }
  },

  computed: {
    getItemHref(): Object {
      return (item): string => {
        switch (item.type) {
          case 'phone':
            return `tel:${item.data}`
          case 'email':
            return `mailto:${item.data}`
          case 'address':
            return GOOGLE_MAPS_LINK
          default:
            return item.data
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.contact {
  height: 100%;

  &:after {
    @include use-fixed-background('~@/assets/images/contact_lines.svg');
  }

  &__body {
    display: flex;
    flex-direction: column;

    @include breakpoint(sm) {
      height: 100%;
      flex-direction: row;
    }
  }
  &__column {
    &--image {
      width: 100%;

      @include breakpoint(sm) {
        width: 50%;
        height: 100%;

        figure {
          height: 100%;
        }

        img {
          height: 100%;
          object-fit: cover;
        }
      }

      @include breakpoint(md) {
        width: 60%;
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
      margin: 0 auto 0 10%;
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

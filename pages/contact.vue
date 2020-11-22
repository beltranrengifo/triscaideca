<template>
  <div class="contact">
    <container tag="section" class="font-light">
      <section class="contact__map">
        <client-only>
          <l-map
            :zoom="zoom"
            :center="coordinates"
            :options="{ zoomControl: false, attributionControl: false }"
          >
            <l-tile-layer :url="tileLayer"></l-tile-layer>
            <l-marker :icon="icon" :lat-lng="coordinates"></l-marker>
          </l-map>
        </client-only>
      </section>
    </container>
    <container tag="section" class="font-light" boxed>
      <article class="grid gap-8 grid-cols-1 md:grid-cols-3 mt-12">
        <p>
          {{ contact.content }}
        </p>
        <ul>
          <li v-for="item in contact.contactList" :key="item.name" class="mb-2">
            <small class="block mb-1"> {{ item.name }}</small>
            <component :is="tag(item.link)" v-bind="tagProps(item.link)">
              {{ item.data }}
            </component>
          </li>
        </ul>
      </article>
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

  data(): object {
    return {
      coordinates: [40.677493, -3.618312],
      zoom: 14,
      tileLayer:
        'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVsdHJhbnJlbmdpZm8iLCJhIjoiY2tnZHZpaDFpMG13czJybGV4ZjNsbzNpeCJ9.N47swsSPVmFYeqUZJL3xJg',
    }
  },

  computed: {
    icon(): object | null {
      if (!process.browser) {
        return null
      }
      return require('leaflet').icon({
        iconUrl: '/triscaideca-black-logo.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
      })
    },

    tag(): object {
      return (link: string): string => (link ? 'a' : 'span')
    },

    tagProps(): object {
      return (link: string | undefined): object | null => {
        const withMail = link && link.includes('@')
        return link
          ? {
              href: withMail ? `mailto:${link}` : link,
              target: withMail ? null : '_blank',
            }
          : null
      }
    },
  },
})
</script>

<style lang="scss">
.contact {
  &__map {
    height: rem(480);
  }
}
</style>

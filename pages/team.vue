<template>
  <container tag="section" boxed class="font-light">
    <header>
      <h1 class="sr-only text-xl">
        Triscaideca Estudio - {{ $t('team.title') }}
      </h1>
      <figure class="mb-8">
        <img :src="teamImage(team.image)" alt="Triscaideca Equipo" />
      </figure>
    </header>
    <main class="team__body grid gap-8 grid-cols-1 md:grid-cols-2">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="team__description" v-html="team.content" />

      <div>
        <ul>
          <li v-for="person in team.team" :key="person.name">
            <h2 class="text-xl mb-4">{{ person.name }}</h2>
            <p class="mb-8">{{ person.description }}</p>
          </li>
        </ul>
      </div>
    </main>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Team',

  async asyncData({ $content }): Promise<Object> {
    return {
      team: await $content('pages', 'team').fetch(),
    }
  },

  computed: {
    teamImage(): object | null {
      return (image: object) => {
        try {
          return require(`@/assets/images/pages/${image}`)
        } catch (e) {
          return null
        }
      }
    },
  },
})
</script>

<style lang="scss">
.team {
  &__description {
    p {
      margin-bottom: rem(16);
    }
  }
  &__body {
    @include breakpoint(only-phone) {
      padding: rem(16);
    }
  }
}
</style>

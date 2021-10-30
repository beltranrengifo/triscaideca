<template>
  <div class="team">
    <container full tag="section">
      <header>
        <h1 class="sr-only text-xl">Triscaideca Estudio</h1>
        <figure class="team__banner">
          <img
            src="@/assets/images/contact-banner-image-top.jpg"
            alt="Triscaideca Imagen de restaurante"
          />
        </figure>
      </header>
      <container tag="section" boxed>
        <div class="team__body">
          <div class="team__column">
            <h2>{{ teamPage.title }}</h2>
            <div v-html="teamPage.content" />
          </div>
          <div class="team__column">
            <team-members :team-members="teamPage.team" />
          </div>
        </div>
      </container>
      <container full tag="section">
        <figure class="team__banner">
          <img
            src="@/assets/images/contact-banner-image-bottom.jpg"
            alt="Triscaideca Imagen de restaurante"
          />
        </figure>
      </container>
    </container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Team',

  async asyncData({ $content }): Promise<Object> {
    return {
      teamPage: await $content('pages', 'team').fetch(),
    }
  },
})
</script>

<style lang="scss">
.team {
  &__body {
    display: flex;
    gap: rem(16);
    padding: rem(64) 0;

    h2 {
      font-size: rem(36);
      text-transform: uppercase;
      margin-bottom: rem(32);
      border-bottom: 1px solid;
      padding-bottom: 8px;
    }

    p {
      font-size: rem(20);
      margin-bottom: rem(16);
      line-height: 1.75;
    }
  }

  &__column {
    flex: 1;
  }

  &__banner {
    img {
      width: 100%;
      height: rem(200);
      object-fit: cover;
    }
  }
}
</style>

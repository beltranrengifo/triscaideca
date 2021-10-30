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
        <h2>{{ teamPage.title }}</h2>
        <div class="team__body">
          <div class="team__column">
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
  h2 {
    font-size: 6vw;
    margin-top: rem(32);
    margin-bottom: rem(32);
    text-align: center;
  }
  &__body {
    display: flex;
    gap: rem(32);
    padding: rem(16);
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
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

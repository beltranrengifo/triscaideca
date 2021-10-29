<template>
  <div class="contact">
    <container full tag="section" class="font-light">
      <figure class="contact__banner">
        <img
          src="@/assets/images/contact-banner-image-top.jpg"
          alt="Triscaideca Imagen de restaurante"
        />
      </figure>
    </container>
    <container tag="section" boxed>
      <div class="contact__body">
        <div class="contact__column">
          <h2>Espacios para la comunicación</h2>
          <p>
            Triscaideca es ante todo un espacio para la comunicación, y después,
            una fábrica de espacios.
          </p>
          <p>
            Entendemos nuestro trabajo como una relación abierta y fluida con
            clientes, colaboradores y proveedores. Diseñamos espacios para
            restaurantes, discotecas, tiendas, cadenas de comida rápida, casas
            particulares y amigos. Atendemos las necesidades de cualquier ámbito
            y colaboramos en la creación y diseño de las identidades de marca.
            Jugando con las formas, los materiales, volúmenes y texturas
            expresamos nuestra manera de entender un espacio y las sensaciones
            que debe producir.
          </p>
          <p>
            El arte gráfico, la fotografía y la iluminación son algunas de
            nuestras debilidades. Sabemos que todo comunica y ponemos mucho mimo
            al detalle. Disfrutamos con la recuperación de oficios artesanos,
            colaborando con otros artistas y diseñadores visuales. Algunos con
            reconocidas trayectorias profesionales y otros,artistas emergentes,
            con prometedoras carreras.
          </p>
          <p>
            Triscaideca surgió en 2011 con la superstición de que todo iría
            bien, de la mano de Lucia Macho y Gonzalo Álvarez. Quizá por eso
            llevemos un trece escondido en nuestro nombre. Adoramos nuestro
            trabajo y seguiremos en nuestras trece por cumplir algunos años más.
          </p>
        </div>
        <div class="contact__column"></div>
      </div>
    </container>
    <container full tag="section" class="font-light">
      <figure class="contact__banner">
        <img
          src="@/assets/images/contact-banner-image-bottom.jpg"
          alt="Triscaideca Imagen de restaurante"
        />
      </figure>
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
    return {}
  },

  computed: {
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
  &__body {
    display: flex;
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

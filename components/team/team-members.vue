<template>
  <div class="team-members">
    <ul class="team-members__ul">
      <li
        v-for="member in teamMembers"
        :key="member.name"
        class="team-members__item"
      >
        <h3>{{ member.name }}</h3>
        <p>{{ member.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TeamMembers',

  props: {
    teamMembers: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.team-members {
  &__ul {
    margin-bottom: rem(64);

    @include breakpoint(md) {
      padding-left: rem(64);
      margin-bottom: 0;
    }
  }
  &__item {
    h3 {
      font-size: rem(32);
    }
    p {
      font-size: rem(18);
    }
  }
}
</style>

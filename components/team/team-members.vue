<template>
  <div class="team-members">
    <nav>
      <ul class="team-members__nav">
        <li
          v-for="member in teamMembers"
          :key="member.name"
          class="team-members__item"
        >
          {{ member.name }}
        </li>
      </ul>
    </nav>
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
  &__nav {
    display: flex;
  }
  &__item {
  }
}
</style>

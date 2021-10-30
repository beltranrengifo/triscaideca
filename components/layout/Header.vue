<template>
  <header
    class="
      main-header
      px-8
      py-16
      flex flex-col
      sm:flex-row sm:justify-between
      flex-shrink-0
    "
  >
    <Logo class="self-center sm:self-auto mb-4 sm:m-0" />
    <Navigation class="self-center sm:self-auto mb-4 sm:m-0" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>

<style lang="scss" scoped>
.main-header {
  overflow: hidden;
}
</style>

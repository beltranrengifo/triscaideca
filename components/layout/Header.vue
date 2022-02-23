<template>
  <header class="main-header flex justify-between flex-shrink-0">
    <Logo />
    <Navigation />
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
  padding: rem(8) rem(16);
}
</style>

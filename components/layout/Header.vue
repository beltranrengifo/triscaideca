<template>
  <header class="main-header px-8 py-16 flex justify-between flex-shrink-0">
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
}
</style>

<template>
  <header>
    <header-navbar />
    <header-carousel />
  </header>
</template>

<script>
import HeaderCarousel from './HeaderCarousel.vue';
import HeaderNavbar from './HeaderNavbar.vue';
export default {
  name: "AppHeader",
	components: {
    HeaderCarousel,
    HeaderNavbar
  },
}
</script>

<style lang="scss">
header {
  background-color: #000;
}
</style>
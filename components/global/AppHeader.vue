<template lang="pug">
header
  <Header-Navbar />
  <Header-Carousel />
</template>

<script>
import HeaderNavbar from "./HeaderNavbar";
import HeaderCarousel from "./HeaderCarousel";

export default {
  name: "AppHeader",
  components: {
    HeaderNavbar,
    HeaderCarousel,
  },
};
</script>

<style lang="scss">
header {
  background-color: #000;
  min-height: 100vh;
}
</style>

<template>
  <div id="app">
    <app-header />
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  }
};
</script>

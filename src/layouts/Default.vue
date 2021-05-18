<template>
  <div class="mx-auto sm:w-full sm:px-2 lg:w-3/4 lg:px-0 ">
    <NavBar />
    <slot />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
html {
  @apply bg-rose-100;
}
</style>

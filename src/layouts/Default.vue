<template>
  <div class="w-full">
    <nav-bar />
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

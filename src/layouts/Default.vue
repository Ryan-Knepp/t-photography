<template>
  <div class="w-full">
    <nav-bar />
    <collage />
    <slot />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Collage from "../components/Collage.vue"

export default {
  components: {
    NavBar,
    Collage,
  },
};
</script>

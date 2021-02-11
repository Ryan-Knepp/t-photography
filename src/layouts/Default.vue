<template>
  <div class="w-full">
    <NavBar />
    <Collage />
    <slot />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Collage from "../components/Collage.vue";

export default {
  components: {
    NavBar,
    Collage,
  },
};
</script>

<template>
  <div>
    <!-- <insta-bar /> -->
    <Layout>
      <Collage />
      <h1>Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>
    </Layout>
  </div>
</template>

<script>
import InstaBar from "../components/InstaBar.vue";
import Collage from "../components/Collage.vue";

export default {
  components: {
    InstaBar,
    Collage,
  },
};
</script>

<style></style>

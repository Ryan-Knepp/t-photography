<template>
  <div>
    <insta-bar />
    <Layout>
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

export default {
  components: {
    InstaBar,
  },
};
</script>

<style>
h1 {
  @apply text-6xl;
}
h2 {
  @apply text-4xl;
}
h3 {
  @apply text-2xl;
}
</style>

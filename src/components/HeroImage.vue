<template>
  <div class="heroContainer">
    <div class="heroImage">
      <g-image :src="src" class="w-full object-cover image fill-current" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style scoped>
.heroContainer {
  position: relative;
}
.heroContainer::before {
  position: absolute;
  z-index: 1;
  top: -1px;
  left: -1px;
  display: block;
  width: 45px;
  height: 45px;
  content: "";
  background: url("../assets/corner.svg");
  background-repeat: no-repeat;
  background-size: 45px;
}

.heroContainer::after {
  position: absolute;
  z-index: 1;
  top: -1px;
  right: -1px;
  display: block;
  width: 45px;
  height: 45px;
  content: "";
  background-image: url("../assets/corner.svg");
  background-repeat: no-repeat;
  background-size: 45px;
  transform: rotate(90deg);
}

.heroImage::before {
  position: absolute;
  z-index: 1;
  bottom: -1px;
  left: -1px;
  display: block;
  width: 45px;
  height: 45px;
  content: "";
  background: url("../assets/corner.svg");
  background-repeat: no-repeat;
  background-size: 45px;
  transform: rotate(-90deg);
}

.heroImage::after {
  position: absolute;
  z-index: 1;
  bottom: -1px;
  right: -1px;
  display: block;
  width: 45px;
  height: 45px;
  content: "";
  background-image: url("../assets/corner.svg");
  background-repeat: no-repeat;
  background-size: 45px;
  transform: rotate(180deg);
}

.image {
  max-height: 800px;
}
</style>

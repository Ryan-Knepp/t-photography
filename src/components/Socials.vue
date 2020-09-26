<template>
  <ul class="flex justify-left mt-6">
    <li class="px-4">
      <a :href="'https://www.facebook.com/' + $props.facebook" target="_blank">
        <img src="../assets/facebook.svg" alt />
      </a>
    </li>
    <li class="px-4">
      <a :href="'https://www.instagram.com/' + $props.instagram" target="_blank">
        <img src="../assets/instagram.svg" alt />
      </a>
    </li>
    <li class="px-4">
      <a :href="'mailto:' + $props.email" target="_blank">
        <img src="../assets/email.svg" alt />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    facebook: String,
    instagram: String,
    email: String,
  },
};
</script>

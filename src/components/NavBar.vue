<template>
  <header class="flex w-full max-w-6xl justify-around mx-auto">
    <g-image :src="$static.biz.logo.file.url" />
    <ul class="flex text-rose-800 font-bold text-xl">
      <li class="p-4">
        <g-link to="/">Home</g-link>
      </li>
      <li class="p-4">
        <g-link to="/portfolio/">Portfolio</g-link>
      </li>
      <li class="p-4">
        <g-link to="/blog/">Blog</g-link>
      </li>
      <li class="p-4">
        <g-link to="/about/">About</g-link>
      </li>
      <li class="p-4">
        <g-link to="/contact/">Contact</g-link>
      </li>
    </ul>
    <div class="flex-shrink-0">
      <socials />
    </div>
  </header>
</template>

<script>
import Socials from "../components/Socials.vue";

export default {
  components: {
    Socials,
  },
};
</script>

<static-query>
    query {
        biz: contentfulBusinessDetails (id: "3L7M8RIxYd1b27cJVVF0Fn") {
            id
            email
            instagram
            logo {
                title
                file {
                    url
                }
            }
        }
    }
</static-query>

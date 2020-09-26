<template>
  <header class="flex w-full max-w-6xl justify-around mx-auto">
    <img :src="$static.biz.logo.file.url" width="64" height="64" />
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
      <socials
        :instagram="$static.biz.instagram"
        :email="$static.biz.email"
        :facebook="$static.biz.facebook"
      />
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
            facebook
            logo {
                title
                file {
                    url
                }
            }
        }
    }
</static-query>

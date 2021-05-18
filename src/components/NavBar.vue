<template>
  <header class="flex justify-between my-4">
    <img :src="$static.biz.logo.file.url" width="64" height="64" />
    <nav class="">
      <ul class="flex text-accent-dark font-bold text-xl uppercase">
        <li class="mx-2 p-4">
          <g-link to="/">Home</g-link>
        </li>
        <li class=" mx-2 p-4">
          <g-link to="/portfolio/">Portfolio</g-link>
        </li>
        <li class="mx-2 p-4">
          <g-link to="/blog/">Blog</g-link>
        </li>
        <li class="mx-2 p-4">
          <g-link to="/about/">About</g-link>
        </li>
        <li class="pl-4 py-4">
          <g-link to="/contact/">Contact</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
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

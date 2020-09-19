<template>
  <header class="flex w-full justify-around">
    <g-image :src="$static.biz.logo.file.url" />
    <ul class="flex text-pink-600 font-bold text-xl">
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
    <h3>right side</h3>
  </header>
</template>

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
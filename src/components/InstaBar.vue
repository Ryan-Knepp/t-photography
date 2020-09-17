<template>
  <div class="flex justify-center m-6">
    <a
      v-for="edge in $static.posts.edges"
      :key="edge.node.id"
      :href="`https://www.instagram.com/p/${edge.node.shortcode}`"
      target="_blank"
    >
      <g-image
        :src="edge.node.thumbnail_resources[0].src"
        :alt="edge.node.accessibility_caption"
      />
    </a>
  </div>
</template>

<static-query>
    query Instagram {
        posts: allInstagram (sortBy:"taken_at_timestamp" limit: 6) {
            edges {
                node {
                    id
                    shortcode
                    accessibility_caption
                    thumbnail_src
                    taken_at_timestamp
                    thumbnail_resources {
                        src
                        config_width
                        config_height
                    }
                }
            }
        }
    }
</static-query>

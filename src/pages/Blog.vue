<template>
  <Layout>
    <article v-for="edge in $page.blogs.edges" :key="edge.node.id">
      <h2>
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </h2>
      <small>{{ published(edge.node.publishDate) }}</small>
    </article>
  </Layout>
</template>

<script>
export default {
  methods: {
    published: (date) => {
      const published = new Date(date);
      return `${published.getMonth()}.${published.getDay()}.${published.getFullYear()}`;
    },
  },
};
</script>

<page-query>
    query {
        blogs: allContentfulBlogPost {
            edges {
                node {
                    id
                    title
                    path
                    coverImage {
                        title
                        file {
                            url
                            fileName
                            contentType
                        }
                    }
                    publishDate
                }
            }
  }
    }
</page-query>

<style></style>

<template>
  <Layout>
    <div class="flex flex-col w-full">
      <HeroImage :src="$page.post.coverImage.file.url" />
      <div class="flex flex-col max-w-prose self-center">
        <h1 class="text-accent-dark text-5xl mt-2 mb-1">
          {{ $page.post.title }}
        </h1>
        <p class="text-gray-600 text-sm">
          {{ published($page.post.publishDate) }}
        </p>
        <ul class="my-4">
          <li
            v-for="tag in $page.post.tags"
            :key="tag"
            class="inline-block mr-4"
          >
            <Tag :tag="tag" />
          </li>
        </ul>
        <!-- <h3>{{ $page.post.tags[0] }}</h3>
      <h3>{{ $page.post.tags[1] }}</h3> -->
        <!-- <h4>{{ published($page.post.publishDate) }}</h4> -->
        <article
          v-html="documentToHtmlString($page.post.body)"
          class="prose self-center"
        ></article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
    post: contentfulBlogPost(path: $path) {
        id
        title
        slug
        publishDate
        tags
        body
        coverImage {
          title
          file {
            url
            fileName
            contentType
            }
        }
    }
}
</page-query>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import HeroImage from "../components/HeroImage.vue";
import Tag from "../components/Tag";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return `<img src="${node.data.target.fields.file.url}" alt="${
        node.data.target.fields.title
      }" />`;
    },
  },
};
export default {
  components: { HeroImage, Tag },
  methods: {
    documentToHtmlString: (body) => {
      return documentToHtmlString(body, options);
    },
    published: (date) => {
      const published = new Date(date);
      return `${published.getMonth()}.${published.getDay()}.${published.getFullYear()}`;
    },
  },
};
</script>

<style scoped></style>

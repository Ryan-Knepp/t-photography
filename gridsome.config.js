module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
    ContentfulBlogPost: "/blog/:slug",
  },
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE_ID, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        typeName: "Contentful",
      },
    },
  ],
};

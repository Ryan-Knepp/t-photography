module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
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
    {
      use: "@zefman/gridsome-source-instagram",
      options: {
        username: "taryn.knepp", // Instagram username
        typeName: "Instagram", // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      },
    },
  ],
};

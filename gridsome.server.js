module.exports = function ServerInit(api, options) {
  const tailwind = require("tailwindcss");

  api.chainWebpack((config) => {
    ["css", "scss", "sass", "less", "stylus", "postcss"].forEach((lang) => {
      config.module
        .rule(lang)
        .oneOf("normal")
        .use("postcss-loader")
        .tap((options) => {
          options.plugins.unshift(tailwind);
          return options;
        });
    });
  });
};

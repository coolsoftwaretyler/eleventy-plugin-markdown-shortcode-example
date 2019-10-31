const markdownShortcode = require("eleventy-plugin-markdown-shortcode");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPlugin(markdownShortcode, {
      html: true,
      linkify: true,
    });
    return {
      dir: {
        input: "src"
      }
    };
  };

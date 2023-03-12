const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
        components: "src/_includes/*.webc"
    });

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);


    return {
        htmlTemplateEngine: "njk",
        pathPrefix: "/",
        dir: {
            input: "src",
            output: "docs",
        },
    };
};
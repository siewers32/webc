const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
        components: "src/_components/*.webc"
    });

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addFilter("image", function(url, alt, size){
        return `<img src="${url}" alt="${alt}" style="width:${size}%;">`;
        
    })

    eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {	
        return posts.filter(p => {
            authorstxt = p.data.author + '';
            authors = authorstxt.split(',');
            trimmed = authors.map(a => a.trim())
            return (trimmed.includes(author)) ?  true :  false;
        })
	});

    return {
        htmlTemplateEngine: "webc",
        pathPrefix: "/",
        dir: {
            input: "src",
            output: "docs",
        },
    };
};
module.exports = function (eleventyConfig) {

    /*
     * Copia a pasta assets inteira para o site final.
     * Isso inclui CSS, imagens, ícones e vídeos.
     */
    eleventyConfig.addPassthroughCopy("assets");

    return {

        /*
         * Define onde estão os arquivos de conteúdo.
         */
        dir: {

            input: "content",

            /*
             * Define onde estão os layouts.
             */
            includes: "../layouts",

            /*
             * O site pronto será gerado dentro da pasta docs.
             * Isso permite publicar diretamente pelo GitHub Pages.
             */
            output: "docs"

        },

        /*
         * Permite utilizar arquivos .md e .njk
         */
        markdownTemplateEngine: "njk",

        htmlTemplateEngine: "njk",

        dataTemplateEngine: "njk"

    };

};

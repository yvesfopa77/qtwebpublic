module.exports = {
  siteMetadata: {
    title: `Digital Bank Stack`,
    description: `Commercial banks, Fin-techs, bootstrap your digital deployment
      with state-of-the-art ready to use and highly customizable platform and
      drastically shorten your time to market`,
    author: `@qognitiv`,
    keywords: "qognitiv, banking",
    siteUrl: "https://qognitiv.io",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Qognitiv App - Digital Bank Stack`,
        short_name: `Qognitiv`,
        start_url: `/`,
        background_color: `#f5f6f9`,
        theme_color: `#00ACC1`,
        display: `standalone`,
        icon: `src/images/qognitiv-fav.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'a27ea4f0-8bf8-4f4d-ab6a-ad9f0c80db27',
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ],
}

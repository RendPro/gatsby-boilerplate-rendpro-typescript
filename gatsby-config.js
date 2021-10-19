require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-boilerplate-rendpro-typescript",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          "@assets": "src/assets",
          "@components": "src/components",
          "@config": "src/config",
          "@hooks": "src/hooks",
          "@templates": "src/templates",
          "@theme": "src/theme",
          "@utils": "src/utils",
          "@config": "src/config",
          "@types": "src/types",
        },
      },
    },
  ],
};

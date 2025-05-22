module.exports = {
  siteMetadata: {
    title: `Wayan Sudiarta`,
    description: `Software Engineer portfolio showcasing skills, experience, and projects.`,
    author: `@wysdi`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wayan-sudiarta-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#2D3748`,
        theme_color: `#4299E1`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/src/styles/assets",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto+Mono\:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // Enable offline functionality
    `gatsby-plugin-offline`,
  ],
};

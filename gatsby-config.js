module.exports = {
  siteMetadata: {
    title: `Portafolio de Alexis Velázquez`,
    titleTemplate: `Alexis Velázquez`,
    description: `Portafolio de trabajos profesionales.`,
    author: `@alexisvelazquez`,
    image: `/src/images/team.jpg`,
    url: `https://alexisvelazquez.com`,
    siteUrl: `https://alexisvelazquez.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://alexis-gatsby.disturbioilustrativo.com/graphql`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/icons/,
        },
      },
    },

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
}

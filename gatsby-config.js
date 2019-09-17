module.exports = {
  siteMetadata: {
    title: `Insightful`,
    description: `Take your ESPN fantasy football league to the next level with automatically generated matchup analysis and breakdowns`,
    author: `@reecelangerock`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-148167774-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#c83802`,
        theme_color: `#c83802`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

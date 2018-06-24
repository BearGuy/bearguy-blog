module.exports = {
  siteMetadata: {
    title: 'BearGuy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121301783-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}

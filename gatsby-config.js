/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Michael Akintomo",
    description: "Hi I'm Michael and I'm a frontend developer.",
    author: "Michael Akintomo",
    lang: "en",
  },

  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `cdn.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MichaelAkintomo`,
        short_name: `MichaelAkintomo`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-layout",
    "gatsby-plugin-sass",
  ],
}

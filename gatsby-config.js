const path = require("path")

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/images/art`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: "#___gatsby",

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          closeTimeoutMS: 500,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SSPN`,
        short_name: `SSPN`,
        start_url: `/`,
        background_color: `#8bd8ed`,
        theme_color: `#8bd8ed`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`nunito`, `lato\:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@common": path.resolve(__dirname, "src/components/common"),
          "@images": path.resolve(__dirname, "src/images"),
          "@sections": path.resolve(__dirname, "src/components/sections"),
          "@styles": path.resolve(__dirname, "src/styles/"),
          "@static": path.resolve(__dirname, "static/"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69494366-6",
      },
    },
  ],
}

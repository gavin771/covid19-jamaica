const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:8081",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  },
  pathPrefix: "/",
  siteMetadata: require("./site-metadata.json"),
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-stackbit-static-sass`,
      options: {
        inputFile: `${__dirname}/src/sass/main.scss`,
        outputFile: `${__dirname}/public/assets/css/main.css`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          `gatsby-remark-images-modal`,
{resolve: `gatsby-plugin-subscribers`, options:{id: 'a432c6f20-4f04-4803-b082-7d773aa19edc'} }, 
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {}
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
        menus: require("./src/data/menus.json")
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151955170-2"
      }
    }
    // {
    //   resolve: `gatsby-source-twitter-custom`,
    //   options: {
    //     credentials: {
    //       consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //       bearer_token: process.env.TWITTER_BREARER_TOKEN
    //     },
    //     query: {
    //       endpoint: `lists/members`,
    //       params: {
    //         list_id: `1238656160300924928`,
    //         include_rts: false,
    //         exclude_replies: false,
    //         tweet_mode: `extended`,
    //         count: 20
    //       }
    //     }
    //   }
    // }
  ]
};

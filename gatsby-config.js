require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
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
        plugins: [`gatsby-remark-component`]
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

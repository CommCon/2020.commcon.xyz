const process = require('process')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'CommCon Virtual 2020',
    description: '20 Sessions over 5 days, with world class experts in VoIP and WebRTC',
    twitter: 'https://twitter.com/commconuk',
    youtube: 'https://www.youtube.com/commcon',
    instagram: 'https://www.instagram.com/commconuk/',
    facebook: 'https://www.facebook.com/CommConUK/'
  },
  plugins: [
    'gatsby-theme-conference',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'poppins\:400,600,900'
        ]
      }
    },
    // 'gatsby-plugin-react-helmet'
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: 'UCe_eAP4ToqFLSxzvkTlNzUQ',
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos:  100
      },
    },
  ]
}

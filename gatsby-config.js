module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'CommCon Virtual 2020',
    description: 'Something something amazing',
    twitter: 'https://twitter.com/commconuk',
    instagram: 'https://www.instagram.com/commconuk/',
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
    }
  ]
}

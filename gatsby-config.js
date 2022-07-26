module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby starter React Bricks + Tailwind`,
        short_name: `React Bricks Starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#111827`,
        display: `minimal-ui`,
        icon: `src/images/dp.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

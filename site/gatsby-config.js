module.exports = {
  siteMetadata: {
    description: "Usman Chaudhary | Web dev",
    locale: "en",
    title: "Usman C",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}

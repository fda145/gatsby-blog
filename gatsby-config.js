// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: "Meu Blog Profissional",
    description: "Blog sobre tecnologia, desenvolvimento web e programação",
    siteUrl: "https://seu-username.github.io/gatsby-blog",
    author: "Seu Nome",
    image: "/images/og-image.jpg"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content/posts`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/404.html"]
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://seu-username.github.io/gatsby-blog",
        sitemap: "https://seu-username.github.io/gatsby-blog/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    }
  ]
};
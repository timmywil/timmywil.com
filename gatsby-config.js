module.exports = {
  jsxRuntime: 'automatic',
  jsxImportSource: '@emotion/react',
  siteMetadata: {
    title: 'Timmy Willison',
    author: 'Timmy Willison',
    description: 'Personal blog and website for Timmy Willison',
    siteUrl: 'https://timmywil.com/',
    social: {
      github: 'timmywil',
      linkedin: 'timmywil',
      mastodon: '@timmywil',
      twitter: '@timmywil'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-138744138-1',
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            site_url: 'https://timmywil.com/blog/',
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                sort: {frontmatter: {date: DESC}},
                filter: {frontmatter: {draft: {ne: true}}},
                limit: 1000
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            }
            `,
            output: 'rss.xml',
            title: "Timmy Willison's Blog RSS"
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Write more, build more',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2a7ae2',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography'
      }
    }
  ]
}

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPrismicTextContent {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
    result.data.allPrismicTextContent.edges.forEach(({ node }) => {
    createPage({
      path: node.uid,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        uid: node.uid,
      },
    })
  })
}
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  /* ---------------------------------------------------------- */
  /*          Extraemos los datos desde Grapql                  */
  /*------------------------------------------------------------*/

  const posts = await graphql(`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          content
          slug
          date
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  console.log(posts.data.allWpPost.nodes)

  /* ------------------------------------------------------------- */
  /*                Crear paginación dinámica                      */
  /* ------------------------------------------------------------- */
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allWpPost.nodes, // An array of objects
    itemsPerPage: 22, // How many items you want per page
    pathPrefix: "/", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
  })

  /* -------------------------------------------------------------- */
  /*                  Crear ruta de pagina interna                  */
  /* -------------------------------------------------------------- */
  posts.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: `/${post.slug}`,
      component: path.resolve(`src/templates/post/post.js`),
      context: {
        data: post,
      },
    })
  })
}

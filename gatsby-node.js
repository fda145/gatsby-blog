const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Adicionar campo de tempo de leitura
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode });
    
    // Calcular tempo de leitura (aproximado)
    const content = node.internal.content || '';
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    
    createNodeField({
      node,
      name: 'timeToRead',
      value: {
        minutes,
        text: `${minutes} min de leitura`
      }
    });
  }
};

// Criar páginas dinamicamente
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.nodes;
  const postTemplate = path.resolve('./src/templates/post-template.js');

  // Criar páginas de posts
  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id
      }
    });
  });
};

// Webpack customization (opcional)
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@content': path.resolve(__dirname, 'src/content')
      }
    }
  });
};
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/posts/"}}) {
      edges {
        node {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/components/postsPageLayout.jsx'),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};

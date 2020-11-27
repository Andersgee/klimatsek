import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { Button, Box, Typography, Grid, Container } from "@material-ui/core";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <Link key={post.node.fields.slug} to={post.node.fields.slug}>
        <Typography variant="h4">{post.node.frontmatter.title}</Typography>
      </Link>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <Container>
          <Box my={3}>
            <Typography variant="h6">{tagHeader}</Typography>
            {postLinks}
          </Box>
          <Box my={3}>
            <Link to="/tags/">Browse all tags</Link>
          </Box>
        </Container>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

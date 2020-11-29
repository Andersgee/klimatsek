import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import { Button, Box, Typography, Grid } from "@material-ui/core";
import Card from "./Card";

class BlogRoll extends React.Component {
  //post.frontmatter.featuredpost
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Grid container spacing={3}>
        {posts.map(({ node: post }) => (
          <Grid item xs={12} lg={6} key={post.id}>
            <Box
              height="100%"
              bgcolor="#fff"
              boxShadow={1}
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Box>
                {post.frontmatter.featuredimage && (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                )}
                <Box mx={2} mt={1}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.frontmatter.title}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {post.excerpt}
                  </Typography>
                  <Typography variant="body2">
                    {post.frontmatter.date}
                  </Typography>
                </Box>
              </Box>
              <Box
                mt={1}
                mb={2}
                mx={2}
                display="flex"
                justifyContent="space between"
              >
                <Button
                  href={post.fields.slug}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Läs Mer
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

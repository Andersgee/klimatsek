import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import { Button, Box, Typography, Grid } from "@material-ui/core";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Grid container spacing={3}>
        {posts.map(({ node: post }) => (
          <Grid item xs={12} key={post.id}>
            <Box
              my={3}
              padding={3}
              bgcolor="#fafafa"
              height="100%"
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
                {/* post.frontmatter.featuredpost */}
                <Typography variant="h6">{post.frontmatter.title}</Typography>
                <Typography variant="body1">{post.excerpt}</Typography>
                <Typography variant="body2">{post.frontmatter.date}</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  href={post.fields.slug}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Keep Reading
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

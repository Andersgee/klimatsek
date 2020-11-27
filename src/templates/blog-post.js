import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "./blog-post-html.css";

import { Button, Box, Typography, Grid, Container } from "@material-ui/core";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  //note for future: {content} is a string containing html
  const hastags = tags && tags.length;
  //{helmet || ""}
  return (
    <>
      {helmet}
      <Box my={3}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">
          <PostContent content={content} />
        </Typography>
      </Box>
      {hastags && (
        <Box my={6} display="flex">
          <Typography variant="body2">Keywords: </Typography>
          {tags.map((tag) => (
            <Box mx={0.5}>
              <Link to={`/tags/${kebabCase(tag)}/`}>
                <Typography variant="body2">{tag} </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Container>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Klimatsekretariatet">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      </Container>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;

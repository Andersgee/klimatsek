import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

import { Button, Box, Typography, Grid, Container } from "@material-ui/core";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <Box>
      <Typography variant="h4">Tags</Typography>

      {group.map((tag) => (
        <Link key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          <Typography variant="body1" justify="center">
            {tag.fieldValue} ({tag.totalCount})
          </Typography>
        </Link>
      ))}
    </Box>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

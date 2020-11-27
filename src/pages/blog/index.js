import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

import { Container, Box, Grid } from "@material-ui/core";

import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Grid container justify="space-around" spacing={3}>
            <Grid item xs={8}>
              <BlogRoll />
            </Grid>
            <Grid item xs={4}>
              <Box my={3}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="klimsek"
                  options={{ height: "200vh" }}
                  //onComplete={action}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

import React from "react";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

import { Container, Box, Grid, Typography } from "@material-ui/core";

import { TwitterTimelineEmbed } from "react-twitter-embed";

/*
noHeader
noFooter
noBorders
noScrollbar
transparent
*/

export default class BlogIndexPage extends React.Component {
  //https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference

  render() {
    return (
      <Layout>
        <Grid container justify="space-around" spacing={3}>
          <Grid item xs={8}>
            <BlogRoll />
          </Grid>
          <Grid item xs={4}>
            <Box boxShadow={1} bgcolor="#fff">
              <Typography>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="klimsek"
                  options={{ height: "120vh" }}
                  noHeader
                  noFooter
                  noBorders
                  noScrollbar
                  transparent
                  //onComplete={action}
                />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

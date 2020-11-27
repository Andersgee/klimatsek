import React from "react";
import { Link } from "gatsby";

import {
  Button,
  Box,
  Typography,
  Grid,
  Container,
  Tooltip,
} from "@material-ui/core";

export default function Navbar() {
  return (
    <Grid container justify="flex-start">
      <Grid item>
        <Tooltip title="Home">
          <Button variant="text" href="/">
            Home
          </Button>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Blog">
          <Button variant="text" href="/blog">
            Blog
          </Button>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="About">
          <Button variant="text" href="/about">
            About
          </Button>
        </Tooltip>
        <Tooltip title="Contact">
          <Button variant="text" href="/contact">
            Contact
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

/*
<div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
    */

import React from "react";
import { Link } from "gatsby";

import { Button, Box, Typography, Grid, Container } from "@material-ui/core";
import Tooltip from "./Tooltip";

function But(props) {
  return (
    <Grid item>
      <Tooltip title={props.title} disableHoverListener>
        <Button variant="text" href={props.href}>
          {props.title}
        </Button>
      </Tooltip>
    </Grid>
  );
}

export default function Navbar() {
  return (
    <Container>
      <Box mt={2} display="flex" alignContent="flex-start">
        <Link to="/">
          <img src="/img/klimatsek.png" height="50px" width="184px" />
        </Link>
        <Grid container justify="center" alignItems="center">
          <But title="Digital Koldioxidbudget" href="/digital-budget" />
          <But title="Skaffa Koldioxidbudget" href="/get-budget" />
          <But title="Om Oss" href="/about" />
          <But title="Stöd Oss" href="/support" />
          <But title="Kontakt" href="/contact" />
        </Grid>
      </Box>
    </Container>
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

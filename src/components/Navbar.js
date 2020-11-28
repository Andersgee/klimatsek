import React from "react";
import { Link } from "gatsby";

import { Button, Box, Typography, Grid, Container } from "@material-ui/core";
import Tooltip from "./Tooltip";

function But(props) {
  return (
    <Grid item>
      <Tooltip title={props.title}>
        <Button variant="text" href={props.href}>
          {props.title}
        </Button>
      </Tooltip>
    </Grid>
  );
}

export default function Navbar() {
  return (
    <Grid container justify="center">
      <But title="Nyheter" href="/" />
      <But title="Digital Koldioxidbudget" href="/digital-budget" />
      <But title="Skaffa En Koldioxidbudget" href="/get-budget" />
      <But title="Om Oss" href="/about" />
      <But title="Stöd Oss" href="/support" />
      <But title="Kontakt" href="/contact" />
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

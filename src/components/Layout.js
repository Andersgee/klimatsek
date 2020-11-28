import React from "react";
import Navbar from "../components/Navbar";
import { Container, Box } from "@material-ui/core";

export default function TemplateWrapper(props) {
  return (
    <Container>
      <Navbar />
      <Box my={3}>{props.children}</Box>
    </Container>
  );
}

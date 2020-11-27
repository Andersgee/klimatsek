import React from "react";
import Navbar from "../components/Navbar";

export default function TemplateWrapper(props) {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
}

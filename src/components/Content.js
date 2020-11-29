import React from "react";

export function HTMLContent(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.content }} />;
}

export default function Content(props) {
  return <div>{props.content}</div>;
}

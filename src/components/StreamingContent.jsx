// StreamingContent.jsx

import React from "react";
import { ReactTyped } from "react-typed"

const StreamingContent = ({ content, speed = 50, loop = false }) => {
  return <ReactTyped strings={content} typeSpeed={speed} loop={loop} />;
};

export default StreamingContent;

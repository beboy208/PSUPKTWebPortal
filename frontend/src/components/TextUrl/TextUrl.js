import React from "react";

const TextUrl = ({ text, url }) => {
  if (url === "") {
    return <>{text}</>;
  } else {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        {text}
      </a>
    );
  }
};

export default TextUrl;

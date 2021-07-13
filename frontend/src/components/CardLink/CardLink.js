import React from "react";
import Card from "react-bootstrap/Card";

const CardLink = ({ text = "More...", onViewDetail }) => {
  if (typeof onViewDetail === "function") {
    return (
      <Card.Link href="#" onClick={onViewDetail}>
        {text}
      </Card.Link>
    );
  }
  return <>CardLink</>;
};

export default CardLink;

import React from "react";
import Spinner from "react-bootstrap/Spinner";
import bl from "./AppLoaderBL";

const ApplicationLoader = ({ children }) => {
  const { apps, categories, appTypes } = bl();

  let content;
  if (apps === null || categories === null || appTypes === null) {
    content = (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner animation="border" role="status" variant="info">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    content = <>{children}</>;
  }

  return content;
};

export default ApplicationLoader;

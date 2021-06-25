import React from "react";
import bl from "./AppLoaderBL";

const ApplicationLoader = ({ children }) => {
  const { apps, categories, appTypes } = bl();

  let content;
  if (apps === null || categories === null || appTypes === null) {
    content = <div className={"loading"}>Loading</div>;
  } else {
    content = <>{children}</>;
  }

  return content;
};

export default ApplicationLoader;

import React from "react";
import bl from "./AppLoaderBL";

const ApplicationLoader = ({ children }) => {
  const { apps, categories } = bl();

  let content;
  if (apps === null || categories === null) {
    content = <div class={"loading"}>Loading</div>;
  } else {
    content = <>{children}</>;
  }

  return content;
};

export default ApplicationLoader;

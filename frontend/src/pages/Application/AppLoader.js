import React from "react";
import ApplicationBL from "./ApplicationBL";

const AppLoader = ({ children }) => {
  const bl = ApplicationBL();
  const { apps, fetchApps } = bl;
  const { categories, fetchCategories } = bl;

  React.useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  let content;
  if (apps === null || categories === null) {
    content = <div class={"loading"}>Loading</div>;
  } else {
    content = <>{children}</>;
  }

  return content;
};

export default AppLoader;

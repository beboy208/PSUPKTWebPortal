import React from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const CategoriesSelectorBL = () => {
  const { categories } = React.useContext(ApplicationPageContext);
  React.useEffect(() => {
    console.log({ CatSelector: categories });
  }, [categories]);

  const onCategoriesChanged = (event) => {
    console.log(event.target.value);
  };

  return { categories, onCategoriesChanged };
};

export default CategoriesSelectorBL;

import React, { useCallback } from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const CategoriesSelectorBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { categories, setCategories } = context;

  const onCategoryChange = useCallback(
    (event) => {
      //console.log(event.target.value, event.target.checked);
      const selectedCat = categories.find((c) => {
        return c.id == event.target.value;
      });
      //console.log({ selectedCat });
      if (selectedCat != null) {
        selectedCat.selected = !selectedCat.selected;
      }
      //console.log({ categories });
      setCategories([...categories]);
    },
    [categories, setCategories]
  );

  return { categories, onCategoryChange };
};

export default CategoriesSelectorBL;

import React, { useCallback } from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const CategoriesSelectorBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { categories, setCategories } = context;

  const onCategoryChange = useCallback(
    (event) => {
      //console.log("OnChange", event.target.value, event.target.checked);
      setCategories(
        categories.map((c) => {
          if (event.target.value === c.id) {
            return { ...c, selected: event.target.checked };
          }
          return c;
        })
      );
    },
    [categories, setCategories]
  );

  return { categories, onCategoryChange };
};

export default CategoriesSelectorBL;

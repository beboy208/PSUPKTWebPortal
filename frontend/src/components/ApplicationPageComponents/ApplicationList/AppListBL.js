import React from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const AppListBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { apps, categories } = context;

  const [selectedCategories, setSelectedCategories] =
    React.useState(categories);
  const [filteredApps, setFilteredApp] = React.useState(apps);

  React.useEffect(() => {
    const result = categories.filter((c) => c.selected === true);
    setSelectedCategories(result);
    console.log({ result });
  }, [categories]);

  React.useEffect(() => {
    const result = apps.filter(() => true);
    setFilteredApp(result);
  }, [apps, selectedCategories]);

  return { apps: filteredApps, categories: selectedCategories };
};

export default AppListBL;

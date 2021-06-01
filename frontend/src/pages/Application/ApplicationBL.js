import React, { useCallback } from "react";

import { ApplicationPageContext } from "../../contexts/ApplicationPageContext";
import ApplicationService from "../../services/ApplicationService";

const ApplicationBL = () => {
  const context = React.useContext(ApplicationPageContext);

  const { apps, setApps } = context;
  const { filteredApps, setFilteredApps } = context;
  const { categories, setCategories } = context;
  const { selectedCats, setSelectedCats } = context;

  const fetchApps = useCallback(() => {
    const apps = ApplicationService.getApplications();
    setApps(apps);
  }, [setApps]);

  const fetchCategories = useCallback(() => {
    const cats = ApplicationService.getApplicationCategories();
    cats.map((c) => (c.selected = true));
    setCategories(cats);
  }, [setCategories]);

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

  const getSelectedCategories = () => {
    return categories.filter((c, i) => {
      return c.selected === true;
    });
  };

  React.useEffect(() => {
    const filtered =
      apps &&
      apps.filter((a) => {
        return a;
      });
    setFilteredApps(filtered);
  }, [apps, selectedCats, setFilteredApps]);

  return {
    apps,
    filteredApps,
    fetchApps,
    setApps,
    categories,
    selectedCats,
    fetchCategories,
    setCategories,
    onCategoryChange,
    getSelectedCategories,
  };
};

export default ApplicationBL;

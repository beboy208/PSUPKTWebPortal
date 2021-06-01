import React, { useCallback } from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";
import ApplicationService from "../../../services/Application/ApplicationService";

const AppLoaderBL = () => {
  const context = React.useContext(ApplicationPageContext);

  const { apps, setApps, categories, setCategories } = context;

  const fetchApps = useCallback(() => {
    const apps = ApplicationService.getApplications();
    setApps(apps);
  }, [setApps]);

  const fetchCategories = useCallback(() => {
    const cats = ApplicationService.getApplicationCategories();
    setCategories(cats);
  }, [setCategories]);

  React.useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  React.useEffect(() => {
    console.log({ context });
  }, [context]);

  return { apps, setApps, categories, setCategories };
};

export default AppLoaderBL;

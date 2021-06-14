import React, { useCallback } from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";
import ApplicationService from "../../../services/ApplicationServiceGS";

const AppLoaderBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { apps, setApps } = context;
  const { categories, setCategories } = context;

  const fetchApps = useCallback(() => {
    ApplicationService.getApplications({}).then((data) => {
      setApps(data);
      console.log(data, "app loader bl");
    });
  }, [setApps]);

  const fetchCategories = useCallback(() => {
    const cats = ApplicationService.getApplicationCategories();
    cats.map((c) => (c.selected = true));
    setCategories(cats);
  }, [setCategories]);

  React.useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  React.useEffect(() => {
    console.log({ apps });
  }, [apps]);

  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { apps, categories };
};

export default AppLoaderBL;

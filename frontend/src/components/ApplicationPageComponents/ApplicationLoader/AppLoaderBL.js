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
      console.log(data);
    });
  }, [setApps]);

  const fetchCategories = useCallback(() => {
    const cats = ApplicationService.getApplicationCategories();
    cats.map((c) => (c.selected = true));
    setCategories(cats);
  }, [setCategories]);

  React.useEffect(() => {
    fetchApps();
    console.log({ apps });
  }, [fetchApps, apps]);

  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { apps, categories };
};

export default AppLoaderBL;

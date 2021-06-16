import React, { useCallback } from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";
import ApplicationService from "../../../services/ApplicationServiceGS";

const AppLoaderBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { apps, setApps } = context;
  const { categories, setCategories } = context;
  const { appTypes, setAppTypes } = context;
  const { appContext, setAppContext } = context;

  /*
  // const fetchFunctions = [
  //   ApplicationService.getApplications({}),
  //   ApplicationService.getApplicationCategories(),
  //   ApplicationService.getApplicationTypes(),
  //   ApplicationService.getApplicationContacts(),
  // ];

  // const fetchData = useCallback(async () => {
  //   const result = await Promise.all(fetchFunctions);
  //   console.log({ result });
  //   // setApps(result[0]);
  //   // setCategories(result[1]);
  //   // setAppTypes(result[2]);
  //   // setAppContext(result[3]);
  // }, [fetchFunctions]);

  // React.useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
*/
  const fetchApps = useCallback(() => {
    ApplicationService.getApplications({}).then((data) => {
      setApps(data);
    });
  }, [setApps]);

  const fetchCategories = useCallback(() => {
    ApplicationService.getApplicationCategories().then((data) => {
      data.map((c) => (c.selected = true));
      setCategories(data);
    });
  }, [setCategories]);

  const fetchAppTypes = useCallback(() => {
    ApplicationService.getApplicationTypes().then((data) => {
      setAppTypes(data);
    });
  }, [setAppTypes]);

  const fetchAppContext = useCallback(() => {
    ApplicationService.getApplicationContacts().then((data) => {
      setAppContext(data);
    });
  }, [setAppContext]);

  // console.log("fetch data ... ติดลูปการดึงข้อมูล");
  // fetchApps();
  // fetchAppTypes();
  // fetchAppContext();
  // fetchCategories();

  React.useEffect(() => {
    fetchApps();
  }, [fetchApps]);
  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  React.useEffect(() => {
    fetchAppTypes();
  }, [fetchAppTypes]);
  React.useEffect(() => {
    fetchAppContext();
  }, [fetchAppContext]);

  return {
    apps,
    categories,
    appContext,
    appTypes,
  };
};

export default AppLoaderBL;

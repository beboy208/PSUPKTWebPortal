// ยังไม่ใช้
import React from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const AppListBL = () => {
  const { apps, setState } = React.useContext(ApplicationPageContext);

  React.useEffect(() => {
    console.log("AppListBL", { apps });
  }, [apps]);

  const filterByCatetories = (categoryIds = []) => {
    return [];
  };

  return { apps, filterByCatetories };
};

export default AppListBL;

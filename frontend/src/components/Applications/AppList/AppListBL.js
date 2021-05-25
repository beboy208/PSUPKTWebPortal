import React, { useState } from "react";
import ApplicationContext from "../../../contexts/ApplicationContext";

const AppListBL = () => {
  const [state, setState] = useState([]);

  const apps = React.useContext(ApplicationContext);
  setState(apps);

  return { state, functions: {} };
};

export default AppListBL;

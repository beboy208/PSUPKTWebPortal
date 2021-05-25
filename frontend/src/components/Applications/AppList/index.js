import React from "react";
import ApplicationContext from "../../../contexts/ApplicationContext";
//import AppListBL from "./AppListBL";

const ApplicationList = () => {
  console.log({ ApplicationContext });
  const context = React.useContext(ApplicationContext);
  console.log({ context });
  return (
    <div>
      {/* {context.map((app, i) => {
        return <div key={i}>{app.Name}</div>;
      })} */}
    </div>
  );
};

export default ApplicationList;

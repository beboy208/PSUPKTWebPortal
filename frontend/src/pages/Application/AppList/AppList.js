import React, { useMemo } from "react";
import bl from "./AppListBL";

const ApplicationList = () => {
  const { apps } = bl();

  return (
    <div>
      {apps &&
        apps.map((app, i) => {
          return <div key={i}>{app.name}</div>;
        })}
    </div>
  );
};

export default ApplicationList;

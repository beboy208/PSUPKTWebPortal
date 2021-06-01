import React from "react";
import bl from "./ApplicationBL";

const ApplicationList = () => {
  const { filterdApps: apps } = bl();
  const { getSelectedCategories } = bl();

  return (
    <div>
      {getSelectedCategories &&
        getSelectedCategories().map((c, i) => {
          return <span key={i}>{c.id}</span>;
        })}
      {apps &&
        apps.map((app, i) => {
          return <div key={i}>{app.name}</div>;
        })}
    </div>
  );
};

export default ApplicationList;

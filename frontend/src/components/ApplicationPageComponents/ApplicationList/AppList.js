import React from "react";
import FilteredCategories from "../FilteredCategories/FilteredCategories";

import { default as bl } from "./AppListBL";

const AppListItem = ({ app, key }) => {
  return (
    <div key={key}>
      {app.name} {app.categoryIDs} {app.typeID}
      {/* {appTypes.find((t) => t.id === app.typeID)?.name || "-"} */}
    </div>
  );
};

const AppList = () => {
  const { apps, categories, appTypes } = bl();

  return (
    <div className="container">
      <FilteredCategories categories={categories} />
      {/* {console.log(appTypes)} */}
      <div className="appList">
        {apps &&
          apps.map((app, i) => {
            //console.log({ app });
            app.type = appTypes.find((t) => t.id === app.typeID)?.name || "-";
            return <AppListItem app={app} key={i} />;
          })}
      </div>
    </div>
  );
};

export default AppList;

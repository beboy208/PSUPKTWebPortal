import React from "react";
import { Badge } from "react-bootstrap";
import { default as bl } from "./AppListBL";

const AppList = () => {
  const { apps, categories, appTypes, appContext } = bl();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {categories.map((c, i) => {
          return (
            <>
              <Badge
                pill
                key={i}
                style={{
                  marginRight: "5px",
                  marginBottom: "2px",
                  color: "var(--header-bg-color)",
                  backgroundColor: "var(--header-fg-color)",
                }}
              >
                {c.id}:{c.name}
              </Badge>
            </>
          );
        })}
      </div>
      {/* {console.log(appTypes)} */}
      {apps &&
        apps.map((app, i) => {
          //console.log({ app });
          return (
            <div key={i}>
              {app.name} {app.categoryIDs} {app.typeID}
              {appTypes.find((t) => t.id === app.typeID)?.name || "-"}
            </div>
          );
        })}
    </div>
  );
};

export default AppList;

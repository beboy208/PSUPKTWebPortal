import React from "react";
import { Badge } from "react-bootstrap";
import { default as bl } from "./AppListBL";

const AppList = () => {
  const { apps, categories } = bl();

  // const context = React.useContext(ApplicationPageContext);
  // const { apps, setApps } = context;
  // const { categories, setCategories } = context;

  React.useEffect(() => {
    //console.log("Current", { categories });
  }, [categories]);

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
      {apps &&
        apps.map((app, i) => {
          return (
            <div key={i}>
              {app.name} {app.categories}
            </div>
          );
        })}
    </div>
  );
};

export default AppList;

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
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

const AppListAccordion = () => {
  const { apps, categories, appTypes } = bl();

  const getAppsInCats = (id) => {
    let appsCat = apps.filter((a) => {
      let catIDs = Array.from(a.categoryIDs);
      console.log(catIDs);
      return catIDs.includes(id);
    });

    console.log({ appsCat });
    return appsCat.map((a) => {
      return <div>{a.name}</div>;
    });
  };

  return (
    <div class="container">
      <FilteredCategories categories={categories} />
      {/* {console.log(appTypes)} */}
      <Accordion defaultActiveKey="0">
        {categories.map((cat, i) => {
          return (
            <>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={i}>
                  {cat.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={i}>
                  <Card.Body>{getAppsInCats(cat.id)}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </>
          );
        })}
      </Accordion>
      {/* {apps &&
          apps.map((app, i) => {
            //console.log({ app });
            app.type = appTypes.find((t) => t.id === app.typeID)?.name || "-";
            return <AppListItem app={app} key={i} />;
          })}  */}
    </div>
  );
};

export default AppListAccordion;

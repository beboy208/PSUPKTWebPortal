import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import FilteredCategories from "../FilteredCategories/FilteredCategories";

import { default as bl } from "./AppListBL";

const AppListAccordion = () => {
  const { apps, categories } = bl();
  const [appsGroupByCat, setAppsGroupByCat] = React.useState({
    defaultCatID: 0,
    data: [],
  });

  React.useEffect(() => {
    console.log(apps.length, categories.length);
    //คาดว่าจะใช้ในการป้องกันการทำงานหลายรอบ แต่ยังคงไม่เป็นผล
    if (apps.length > 0 && categories.length > 0) {
      let result = {};
      const data = categories.map((cat, i) => {
        if (i === 0) {
          result.defaultCatID = cat.id;
        }
        let newCatWithApps = cat;
        newCatWithApps.applications = apps.filter((a) => {
          let catIDs = Array.from(a.categoryIDs);
          return catIDs.includes(cat.id);
        });
        return newCatWithApps;
      });
      result.data = data;
      setAppsGroupByCat(result);
      console.log(result);
    }
  }, []);

  return (
    <div className="container">
      <FilteredCategories categories={categories} />
      {/* {console.log(appTypes)} */}
      <Accordion defaultActiveKey="0">
        {appsGroupByCat.data.map((cat) => {
          return (
            <Card key={cat.id}>
              <Accordion.Toggle as={Card.Header} eventKey={cat.id}>
                {cat.name}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={cat.id}>
                <Card.Body>xxx</Card.Body>
              </Accordion.Collapse>
            </Card>
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

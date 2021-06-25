import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import FilteredCategories from "../FilteredCategories/FilteredCategories";
import AppListItem from "../ApplicationListItem";

import { default as bl } from "./AppListBL";

const AppListAccordion = () => {
  const { apps, categories, filteredApps, selectedCategories, appTypes } = bl();
  const [appsGroupByCat, setAppsGroupByCat] = React.useState([]);
  const [listItems, setListItems] = React.useState([]);
  const [defaultActiveKey, setDefaultActiveKey] = React.useState(-1);

  /*
  [Manage new ViewModel: appsGroupByCat]
  เนื่องจาก BL เดิมมีเฉพาะการเตรียมข้อมูล Category และ App ทีผ่านการ filter แล้ว
  แต่หน้าจอใหม่ ต้องการแสดงข้อมูลที่ซับซ้อนเพิ่มขึ้น
  จึงนำผลจาก BL มาประมวผลใหม่ โดยให้จัดกลุ่มข้อมูลตาม Category
  และให้มี Collection ของ App ภายใน
  เพื่อให้สามารถ reder ได้ง่าย และ สามารถนับจำนวน app ที่อยู่ในกลุ่มได้
  */
  React.useEffect(() => {
    const appsModel = apps
      .map((app) => {
        app.categories = categories.filter((c) => {
          return app.categoryIDs.includes(c.id);
        });
        app.type = appTypes.find((t) => t.id === app.typeID);
        return app;
      })
      .sort((a1, a2) => (a1.name < a2.name ? -1 : 1)); //sort application by app-name

    const result = categories.map((cat, i) => {
      let newCatWithApps = cat;
      newCatWithApps.applications = appsModel.filter((a) => {
        let catIDs = Array.from(a.categoryIDs);
        //console.log({ catIDs }, cat.id);
        return catIDs.includes(cat.id);
      });
      //console.log({ newCatWithApps });
      return newCatWithApps;
    });
    setAppsGroupByCat(result);
  }, []);

  React.useEffect(() => {
    const selectedCateIDs = selectedCategories.map((c) => c.id);
    const result = appsGroupByCat.filter((c) => selectedCateIDs.includes(c.id));
    setListItems(result);
    // if (defaultActiveKey === -1 && Array.isArray(result) && result.length > 0) {
    //   setDefaultActiveKey(result[0].id.toString());
    //   console.log(result[0].id);
    // }
  }, [selectedCategories]);

  return (
    <>
      <Row>
        <Col md={4} xs={12}>
          Applications: {filteredApps.length} / {apps.length}
        </Col>
        <Col md={8} xs={12}>
          <FilteredCategories categories={selectedCategories} />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* {console.log(appTypes)} */}
          <Accordion defaultActiveKey={defaultActiveKey}>
            {listItems.map((cat) => {
              return (
                <Card id={"card-" + cat.id} key={"card-" + cat.id}>
                  <Accordion.Toggle as={Card.Header} eventKey={cat.id}>
                    {cat.name} ({cat.applications.length})
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={cat.id}>
                    <Card.Body className="card-body-flex">
                      {cat.applications.map((app) => {
                        return (
                          <AppListItem key={cat.id + app.id} item={app} />
                          // <div id={cat.id + app.id} key={cat.id + app.id}>
                          //   {app.name}
                          // </div>
                        );
                      })}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default AppListAccordion;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ApplicationList from "../../components/Applications/AppList";
import CategoriesSelector from "../../components/CategoriesSelector/CategoriesSelector";
//import ApplicationContext from "../../contexts/ApplicationContext";

const ApplicationMain = () => {
  const applications = [
    {
      id: 1,
      Name: "ABC",
    },
  ];
  const context = React.createContext(applications);
  return (
    <Container>
      <context.Provider>
        <Row>
          <Col md={3} xs={12}>
            <CategoriesSelector />
          </Col>
          <Col md={9} xs={12}>
            <ApplicationList />
          </Col>
        </Row>
      </context.Provider>
    </Container>
  );
};

export default ApplicationMain;

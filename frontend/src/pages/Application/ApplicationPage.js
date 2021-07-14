import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ApplicationPageContextProvider from "../../contexts/ApplicationPageContext";
import CategoriesSelector from "../../components/ApplicationPageComponents/CategoriesSelector";
import ApplicationLoader from "../../components/ApplicationPageComponents/ApplicationLoader";
import AppList from "../../components/ApplicationPageComponents/ApplicationList";

const ApplicationPage = () => {
  return (
    <Container>
      <ApplicationPageContextProvider>
        <ApplicationLoader>
          <Row>
            <Col md={2} xs={12}>
              <CategoriesSelector />
            </Col>
            <Col md={10} xs={12}>
              <AppList />
            </Col>
          </Row>
        </ApplicationLoader>
      </ApplicationPageContextProvider>
    </Container>
  );
};

export default ApplicationPage;

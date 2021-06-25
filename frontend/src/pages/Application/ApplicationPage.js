import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ApplicationPageContextProvider from "../../contexts/ApplicationPageContext";
import CategoriesSelector from "../../components/ApplicationPageComponents/CategoriesSelector";
import ApplicationLoader from "../../components/ApplicationPageComponents/ApplicationLoader/ApplicationLoader";
import AppListAccordion from "../../components/ApplicationPageComponents/ApplicationList/AppListAccordion";

const ApplicationPage = () => {
  return (
    <ApplicationPageContextProvider>
      <ApplicationLoader>
        <Row>
          <Col md={2} xs={12}>
            <CategoriesSelector />
          </Col>
          <Col md={10} xs={12}>
            <AppListAccordion />
          </Col>
        </Row>
      </ApplicationLoader>
    </ApplicationPageContextProvider>
  );
};

export default ApplicationPage;

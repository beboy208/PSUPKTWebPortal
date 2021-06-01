import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ApplicationList from "./AppList";
import CategoriesSelector from "./CategoriesSelector";
import ApplicationPageContextProvider from "../../contexts/ApplicationPageContext";
import AppLoader from "./AppLoader";
import bl from "./ApplicationBL";

const ApplicationPage = () => {
  const { apps, setApps, categories, setCategories } = bl();

  return (
    <Container>
      <ApplicationPageContextProvider>
        <AppLoader>
          <Row>
            <Col md={3} xs={12}>
              <CategoriesSelector />
            </Col>
            <Col md={9} xs={12}>
              <ApplicationList />
            </Col>
          </Row>
        </AppLoader>
      </ApplicationPageContextProvider>
    </Container>
  );
};

export default ApplicationPage;

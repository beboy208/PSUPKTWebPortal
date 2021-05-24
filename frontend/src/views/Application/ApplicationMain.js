import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesSelector from "../../components/CategoriesSelector/CategoriesSelector";

const ApplicationMain = () => {
  return (
    <Container>
      <Row>
        <Col md={3} xs={12}>
          <CategoriesSelector />
        </Col>
        <Col md={9} xs={12}>
          uuuu
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationMain;

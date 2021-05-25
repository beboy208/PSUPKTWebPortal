import React from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import CategoriesSelectorBL from "./CategoriesSelectorBL";

const CategoriesSelector = ({ categories }) => {
  const { state, functions } = CategoriesSelectorBL;

  return (
    <Container>
      <Row>
        <Col>
          <strong>Categories</strong>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormCheck>
            <FormCheck.Input />
            <FormCheck.Label>Student</FormCheck.Label>
          </FormCheck>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesSelector;

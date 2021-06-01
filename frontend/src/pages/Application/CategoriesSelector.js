import React from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import bl from "./ApplicationBL";

const CategoriesSelector = () => {
  const { categories, onCategoryChange } = bl();
  return (
    <Container>
      <Row>
        <Col>
          <strong>Categories</strong>
        </Col>
      </Row>
      <Row>
        <Col>
          {categories &&
            categories.map((cat, i) => {
              return (
                <FormCheck>
                  <FormCheck.Input
                    id={cat.id}
                    value={cat.id}
                    checked={cat.selected}
                    onChange= {onCategoryChange}
                  />
                  <FormCheck.Label for={cat.id}>{cat.name}</FormCheck.Label>
                </FormCheck>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesSelector;

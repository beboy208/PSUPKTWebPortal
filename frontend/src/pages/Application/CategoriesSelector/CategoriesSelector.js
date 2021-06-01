import React from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import bl from "./CategoriesSelectorBL";

const CategoriesSelector = () => {
  const { categories, onCategoriesChanged } = bl();
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
                    onChange={onCategoriesChanged}
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

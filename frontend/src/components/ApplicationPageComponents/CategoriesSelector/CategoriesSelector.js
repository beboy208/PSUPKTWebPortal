import React from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import { default as bl } from "./CategoriesSelectorBL";

const CategoriesSelector = () => {
  const { categories, onCategoryChange } = bl();
  React.useEffect(() => {
    console.log({ categories });
    console.log({ onCategoryChange });
  }, [categories, onCategoryChange]);
  return (
    <Container>
      <Row>
        <Col>
          <strong>Categories</strong>
        </Col>
      </Row>
      <Row>
        {categories &&
          categories.map((cat, i) => {
            return (
              <Col md={12} xs={4} key={cat.id}>
                <FormCheck>
                  <FormCheck.Input
                    id={cat.id}
                    value={cat.id}
                    checked={cat.selected}
                    onChange={onCategoryChange}
                  />
                  <FormCheck.Label for={cat.id}>{cat.name}</FormCheck.Label>
                </FormCheck>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default CategoriesSelector;

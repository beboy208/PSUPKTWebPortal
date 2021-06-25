import React from "react";
import { FormCheck, Col, Row } from "react-bootstrap";
import { default as bl } from "./CategoriesSelectorBL";

const CategoriesSelector = () => {
  const { categories, onCategoryChange } = bl();
  React.useEffect(() => {
    // console.log({ categories });
    // console.log({ onCategoryChange });
  }, [categories, onCategoryChange]);
  return (
    <>
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
                  <FormCheck.Label htmlFor={cat.id}>{cat.name}</FormCheck.Label>
                </FormCheck>
                {/* <Form.Check
                  type="checkbox"
                  id={cat.id}
                  label={cat.name}
                  onChange={onCategoryChange}
                /> */}
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default CategoriesSelector;

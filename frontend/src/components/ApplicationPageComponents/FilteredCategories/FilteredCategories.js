import React from "react";
import { Badge } from "react-bootstrap";

const CategoryBadeItem = ({ category }) => {
  const badgeStyle = {
    marginRight: "5px",
    marginBottom: "2px",
    color: "var(--header-bg-color)",
    backgroundColor: "var(--header-fg-color)",
  };
  return (
    <Badge pill key={category.id} style={badgeStyle}>
      {category.name}
      {/* {category.id} */}
    </Badge>
  );
};

const FilteredCategories = ({ categories = [] }) => {
  const containerStyle = {};

  return (
    <>
      <div className="selectedCats" style={containerStyle}>
        {categories.map((c, i) => {
          return <CategoryBadeItem category={c} key={i} />;
        })}
      </div>
    </>
  );
};

export default FilteredCategories;

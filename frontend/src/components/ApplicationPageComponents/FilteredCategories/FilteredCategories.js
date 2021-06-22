import React from "react";
import { Badge } from "react-bootstrap";

const CategoryBadeItem = ({ category }) => {
  const badgeStyle = {
    marginRight: "5px",
    marginBottom: "2px",
    color: "var(--header-bg-color)",
    backgroundColor: "var(--header-fg-color)",
  };
  console.log(category);
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
      <div class="selectedCats" style={containerStyle}>
        {categories.map((c, i) => {
          return <CategoryBadeItem category={c} />;
        })}
      </div>
    </>
  );
};

export default FilteredCategories;

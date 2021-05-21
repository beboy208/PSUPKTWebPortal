import React from "react";

/**
 * Data/Model
 */
const list = [
  {
    id: "a",
    firstname: "Robin",
    lastname: "Wieruch",
    year: 1988,
  },
  {
    id: "b",
    firstname: "Dave",
    lastname: "Davidds",
    year: 1990,
  },
];

// Main Application/Page/View
const App = () => {
  const title = "React";

  return (
    <div>
      <h1>Hello {title}</h1>
      <List ds={list} />;
    </div>
  );
};

/**
 * List Component
 */
const List = ({ ds }) => (
  <ul>
    {ds.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);

/**
 * List Item Component
 */
const ListItem = ({ item }) => (
  <li>
    <div>{item.id}</div>
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>
  </li>
);

export default App;

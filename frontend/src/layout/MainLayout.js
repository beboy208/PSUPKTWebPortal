import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <section id="main">{children}</section>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;

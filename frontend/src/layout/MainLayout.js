import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/psu-deepblue-inverse.css";
import "../assets/styles/psu-site.css";
import "../assets/styles/style1.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container id="main-content">{children}</Container>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;

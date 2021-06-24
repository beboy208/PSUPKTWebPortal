import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/psulogoblue.png";

const Header1 = () => {
  return (
    <div className="header">
      <Container>
        <img src={logo} className="logo" alt="logo" />
        <div className="title">WebPortal</div>
      </Container>
    </div>
  );
};

export default Header1;

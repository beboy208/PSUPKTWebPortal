import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/psulogoblue.png";

const Header1 = () => {
  return (
    <div class="header">
      <Container>
        <img src={logo} class="logo" alt="logo" />
        <div class="title">WebPortal</div>
      </Container>
    </div>
  );
};

export default Header1;

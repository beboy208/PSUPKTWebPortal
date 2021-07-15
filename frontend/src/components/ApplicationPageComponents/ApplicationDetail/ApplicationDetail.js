import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import default_app_img from "../../../assets/images/default_app.png";

const ApplicationDetail = ({ application }) => {
  //if (application == null) return <div>{"abcde"}</div>;
  //return application?.name ? application.name : "abcd";
  //return <div>{"name" in application ? application.name : ""}</div>;

  if (application != null) {
    //const default_app_img = "src/assets/images/default_app.png";
    return (
      <Container className="applicationDetail">
        <Row>
          <Col>
            <h3 className="title">
              {application.name ? application.name : "Unknown"}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6} className="imageContainer">
            <div>
              <img
                src={application.bannderImgUrl || default_app_img} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
                alt=""
              />
            </div>
          </Col>
          <Col sm={12} lg={6} className="descriptionContainer">
            <div>
              <strong>Categories: </strong>
              {application.categories.map((c) => c.name).join(", ")}
            </div>
            <div className="description">{application.description}</div>
            {/* <div className="category">{application.categories}</div>
          <div className="contact">{application.contacts}</div> */}
          </Col>
        </Row>
        <Row>
          <Col className="contactContainer">
            <strong>Contact</strong>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ApplicationDetail;

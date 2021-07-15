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
      <Container className="application-detail">
        <Row>
          <h3 className="title">
            {application.name ? application.name : "Unknown"}
          </h3>
        </Row>
        <Row>
          <Col sm={12} lg={6}>
            <img
              src={application.bannderImgUrl || default_app_img} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
              alt=""
              style={{ maxWidth: "90%", maxHeight: "150px" }}
            />
          </Col>
          <Col sm={12} lg={6}>
            <div>
              <strong>Categories: </strong>
              {application.categories.map((c) => c.name).join(", ")}
            </div>
            <div className="description">{application.description}</div>
            {/* <div className="category">{application.categories}</div>
          <div className="contact">{application.contacts}</div> */}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ApplicationDetail;

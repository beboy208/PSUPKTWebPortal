import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import default_app_img from "../../../assets/images/default_app.png";
import { FiPhone, FiBriefcase, FiMail } from "react-icons/fi";

const ApplicationDetail = ({ application }) => {
  console.log(application);
  //if (application == null) return <div>{"abcde"}</div>;
  //return application?.name ? application.name : "abcd";
  //return <div>{"name" in application ? application.name : ""}</div>;

  const renderPublisherElement = (publisherObj) => {
    //console.log(publisherObj);
    //if (publisherObj !== null && Object.keys(publisherObj).length > 0) {
    if (publisherObj !== null) {
      return (
        <>
          <strong>Publisher:</strong>
          <p>
            {publisherObj.nameEn ?? "-"} <br />
            {publisherObj.nameTh}
          </p>
        </>
      );
    }
  };

  const renderDeveloperElement = (devObj) => {
    if (devObj !== null) {
      return (
        <>
          <strong>Developer:</strong>
          <p>
            {devObj.nameEn ?? "-"} <br />
            {devObj.nameTh}
          </p>
        </>
      );
    }
  };

  if (application != null) {
    //const default_app_img = "src/assets/images/default_app.png";
    console.log({ application });
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
            <p>
              <strong>Categories: </strong>
              {application.categories.map((c) => c.name).join(", ")}
            </p>
            <div className="description">{application.description}</div>
            {/* <div className="category">{application.categories}</div>
          <div className="contact">{application.contacts}</div> */}
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6}>
            {renderPublisherElement(application.publisher)}
          </Col>
          <Col sm={12} lg={6}>
            {renderDeveloperElement(application.developer)}
          </Col>
        </Row>
        <Row>
          <Col className="contactContainer">
            <p>
              <strong>Contact</strong> {/* ({application.contacts.length}) */}
              <ul>
                {application.contacts.length <= 0 ? (
                  <li>-</li>
                ) : (
                  application.contacts.map((c) => {
                    return (
                      <li>
                        {c.name}&emsp;
                        <FiBriefcase /> {c.position || "-"}&emsp;
                        <FiPhone /> {c.phones || "-"}&emsp;
                        <FiMail /> {c.emails || "-"}
                        {/* {c.emails && <a href={`mailto: ${c.emails}`}>{c.emails}</a>} */}
                      </li>
                    );
                  })
                )}
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ApplicationDetail;

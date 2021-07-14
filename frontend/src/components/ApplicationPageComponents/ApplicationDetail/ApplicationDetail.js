import React from "react";

const ApplicationDetail = ({ application }) => {
  //if (application == null) return <div>{"abcde"}</div>;
  //return application?.name ? application.name : "abcd";
  //return <div>{"name" in application ? application.name : ""}</div>;

  if (application != null) {
    return (
      <div className="application-detail">
        <h3 className="title">
          {application.name ? application.name : "Unknown"}
        </h3>
        <div className="container">
          <img src="" alt="" />
          <div className="description">{application.description}</div>
          {/* <div className="category">{application.categories}</div>
          <div className="contact">{application.contacts}</div> */}
        </div>
      </div>
    );
  }
};

export default ApplicationDetail;

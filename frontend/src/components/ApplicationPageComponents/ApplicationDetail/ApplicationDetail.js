import React from "react";

const ApplicationDetail = ({ application }) => {
  //if (application == null) return <div>{"abcde"}</div>;
  return application?.name ? application.name : "abcd";
  //return <div>{"name" in application ? application.name : ""}</div>;
};

export default ApplicationDetail;

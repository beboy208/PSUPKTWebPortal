import React from "react";

export const applications = [
  {
    id: 1,
    Name: "ABC",
  },
];

//สร้างพื้นที่เก็บข้อมูล
const ApplicationContext = () => {
  return React.createContext(applications);
};

export default ApplicationContext;

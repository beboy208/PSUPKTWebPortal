import React from "react";

const mockAppData = [
  { id: 1, name: "App 1", categories: [1, 2] },
  { id: 2, name: "App 2", categories: [1, 3] },
];

const mockAppCategoryData = [
  { id: 1, name: "Student", note: "For all Students" },
  { id: 2, name: "Staff", note: "For all Staffs" },
  { id: 3, name: "Fiscal", note: "For Fiscal officer" },
  { id: 4, name: "Asset" },
  { id: 5, name: "QA" },
  { id: 6, name: "Building" },
  { id: 7, name: "IT" },
];

const getApplications = () => {
  return mockAppData;
};

const getApplicationCategories = () => {
  return mockAppCategoryData;
};

const getAppsByCategoryID = (id) => {
  return [];
};

const ApplicationService = {
  getApplications,
  getAppsByCategoryID,
  getApplicationCategories,
};

export default ApplicationService;

const mockAppCategories = [
  { id: 1, name: "Student", note: "For all Students" },
  { id: 2, name: "Staff", note: "For all Staffs" },
  { id: 3, name: "Fiscal", note: "For Fiscal officer" },
  { id: 4, name: "Asset" },
  { id: 5, name: "QA" },
  { id: 6, name: "Building" },
  { id: 7, name: "IT" },
];

const mockApplicationType = [
  { id: 0, name: "Undefined" },
  { id: 1, name: "Web Application" },
  { id: 2, name: "Windows Application" },
  { id: 3, name: "Android Application" },
  { id: 4, name: "IOS Application" },
];

const apiPath =
  "https://script.google.com/macros/s/AKfycbxqEDuO-Abbfbb2EhUroqhWJXKPAvZKvWVb5-nNzSeH-yYXOoU4Ju3S4Kg2hsPBleO6/exec";

/**
 * Get Applications
 * @param { ?boolean } isAvailable - null for all applications
 * @returns array of applications
 */
const getApplications = async ({ isAvailable } = {}) => {
  const fetchData = await fetch(apiPath + "?q=application").then((response) =>
    response.json()
  );

  return fetchData.data.filter(
    (a) =>
      isAvailable === undefined ||
      a.isAvailable === isAvailable ||
      a.hasOwnProperty("isAvailable") === false
  );
};

const getApplicationCategories = () => {
  return mockAppCategories;
};

const getApplicationTypes = () => {
  return mockApplicationType;
};

const ApplicationService = {
  getApplications,
  getApplicationTypes,
  getApplicationCategories,
};

export default ApplicationService;

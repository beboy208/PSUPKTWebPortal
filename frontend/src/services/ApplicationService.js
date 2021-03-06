const appInfo1 = {
  id: 999,
  name: "ApplicationName",
  description: "Description",
  categoryIDs: [1],
  typeID: "0",
  bannerImgUrl: "",
  url: "https://www.999.com",
  privateIP: "127.0.0.1",
  contacts: [
    {
      id: "",
      name: "someone",
      position: "developer",
      phones: ["6500"],
      emails: ["contact@phuket.psu.ac.th"],
      note: "",
    },
  ],
  note: "",
  isAvailable: false,
};

const mockApplications = [
  appInfo1,
  { id: 1, name: "App 1", categories: [1, 2] },
  { id: 2, name: "App 2", categories: [1, 3, 7] },
];

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

/**
 * Get Applications
 * @param { ?boolean } isAvailable - null for all applications
 * @returns array of applications
 */
const getApplications = ({ isAvailable } = {}) => {
  return mockApplications.filter(
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

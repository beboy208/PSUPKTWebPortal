const appInfoDemo = {
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
  publisher: null,
  developer: null,
  note: "",
  isAvailable: false,
};
/*
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
*/
const apiPath =
  "https://script.google.com/macros/s/AKfycbxqEDuO-Abbfbb2EhUroqhWJXKPAvZKvWVb5-nNzSeH-yYXOoU4Ju3S4Kg2hsPBleO6/exec";

/**
 * Get Applications
 * @param { ?boolean } isAvailable - null for all applications
 * @returns array of applications
 */
const getApplications = async ({ isAvailable } = {}) => {
  return fetch(apiPath + "?q=applications")
    .then((response) => response.json())
    .then((data) => {
      let filterdApps = data.data.filter(
        (a) =>
          isAvailable === undefined ||
          a.isAvailable === isAvailable ||
          a.hasOwnProperty("isAvailable") === false
      );

      filterdApps.forEach((element) => {
        let catIDs =
          typeof element.categoryIDs === "string"
            ? element.categoryIDs.split(",")
            : [];
        element.categoryIDs = [...catIDs];
      });

      return filterdApps;
    });

  //or return await data.data.filter...
};

const getApplicationCategories = async () => {
  return fetch(apiPath + "?q=categories")
    .then((response) => response.json())
    .then((data) => {
      console.log({ categories: data.data });
      return data.data;
    });
};

const getApplicationTypes = async () => {
  return fetch(apiPath + "?q=types")
    .then((response) => response.json())
    .then((data) => {
      console.log({ type: data.data });
      return data.data;
    });
};

const getApplicationContacts = async () => {
  return fetch(apiPath + "?q=contacts")
    .then((response) => response.json())
    .then((data) => {
      console.log({ context: data.data });
      return data.data;
    });
};

const getOrganizations = async ({ id } = {}) => {
  const query = "?q=organizations";
  return fetch(apiPath + query)
    .then((response) => response.json())
    .then((data) => {
      console.log({ orgs: data.data });
      return data.data;
    });
};

const ApplicationService = {
  getApplications,
  getApplicationTypes,
  getApplicationCategories,
  getApplicationContacts,
  getOrganizations,
};

export default ApplicationService;

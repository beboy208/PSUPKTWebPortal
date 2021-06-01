import React from "react";

// /* ประกาศโครงสร้างส่วนของ context และ default value */
// const applications = [{ id: 999, name: "Application 1" }];

/* ประกาศพื้นที่เก็บข้อมูล */
export const ApplicationPageContext = React.createContext({
  states: {},
  setStates: {},
});

/*
ความเข้าใจส่วนตัวเกี่ยวกับการนำ Context.Provider มารวมไว้ที่ Context หรือแยกไฟล์ออกไป
แทนที่จะถูกนำไปใช้โดยตรงในส่วนงานหลัก คือ 
- เพื่อเป็นการประกาศโครงสร้างของ context ในส่วนของ property ที่ชื่อ value
- โครงสร้างของ context อาจมีเฉพาะส่วนของ ข้อมูล หรือ มี function หรือ trigger รวมด้วยก็ได้
- โดย fn หรือ trigger จะใช้เพื่อการปรับเปลี่ยนค่าของ context ในส่วนที่เป็นข้อมูล

สำหรับไฟล์นี้จะทำแบบง่าย โดย ใช้ state และ setState ที่ได้จาก useState 
เป็น context
*/
const ApplicationPageContextProvider = ({ children }) => {
  const [apps, setApps] = React.useState(null);
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    console.log({ apps });
  }, [apps]);

  return (
    <ApplicationPageContext.Provider
      value={{
        apps,
        categories,
        setApps,
        setCategories,
      }}
    >
      {children}
    </ApplicationPageContext.Provider>
  );
};

export default ApplicationPageContextProvider;

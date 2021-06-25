import React from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const AppListBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { apps, categories } = context;

  //กำหนดข้อมูลที่ต้องการติดตามเฉพาะใน Component นี้ ประกอบด้วย
  //1. selectedCategories โดยมีค่าเริ่มต้นเท่ากับข้อมูล Categories ทั้งหมด
  //2. filteredApps  โดยมีค่าเริ่มต้นเท่ากับข้อมูล Applications ทั้งหมด
  const [selectedCategories, setSelectedCategories] =
    React.useState(categories);
  const [filteredApps, setFilteredApp] = React.useState(apps);

  //ติดตามการเปลี่ยนแปลงค่าของ categories เพื่อปรับค่า setSelectedCategories
  React.useEffect(() => {
    const result = categories.filter((c) => c.selected === true);
    setSelectedCategories(result);
    //console.log({ result });
  }, [categories]);

  React.useEffect(() => {
    //console.log({ filteredApps });
  }, [filteredApps]);

  //ติดตามการเปลี่ยนแปลงค่าของ setSelectedCategories รวมถึง applications
  React.useEffect(() => {
    const selectedCateIDs = selectedCategories.map((c) => c.id);
    //console.log({ selectedCateIDs });
    //วนลูปตามจำนวน applications ที่เข้ามา
    const result = apps.filter((a) => {
      //วนลูปตามจำนวน category ของ application
      //ตรวจสอบว่า Category ที่ถูกเลือกมานั้น ตรงกับ category ของ application หรือไม่
      //console.log(a);
      const matchCats = Array.isArray(a.categoryIDs)
        ? a.categoryIDs.filter((c) => {
            let include = selectedCateIDs.includes(c);
            //console.log(c, include);
            return include;
          })
        : [];
      //จะคือค่า Application ที่ตรวจสอบว่ามีค่า matchCats
      //console.log("MatchCats", matchCats.length > 0);
      return matchCats.length > 0;
    });
    //console.log("FilteredApp", { result });
    setFilteredApp(result);
  }, [apps, selectedCategories]);

  return {
    apps,
    categories,
    filteredApps,
    selectedCategories,
    // appTypes,
    // appContext,
  };
};

export default AppListBL;

import React from "react";
import { ApplicationPageContext } from "../../../contexts/ApplicationPageContext";

const AppListBL = () => {
  const context = React.useContext(ApplicationPageContext);
  const { apps, categories } = context;

  const [selectedCategories, setSelectedCategories] =
    React.useState(categories);
  const [filteredApps, setFilteredApp] = React.useState(apps);

  React.useEffect(() => {
    const selectedCateIDs = selectedCategories.map((c) => c.id);
    console.log({ selectedCateIDs });
    //วนลูปตามจำนวน applications ที่เข้ามา
    const result = apps.filter((a) => {
      //วนลูปตามจำนวน category ของ application
      //ตรวจสอบว่า Category ที่ถูกเลือกมานั้น ตรงกับ category ของ application หรือไม่
      console.log(a);
      const matchCats = Array.isArray(a.categoryIDs)
        ? a.categoryIDs.filter((c) => {
            let include = selectedCateIDs.includes(parseInt(c));
            console.log(c, include);
            return include;
          })
        : [];
      //จะคือค่า Application ที่ตรวจสอบว่ามีค่า matchCats
      return matchCats.length > 0;
    });
    setFilteredApp(result);
  }, [apps, selectedCategories]);

  React.useEffect(() => {
    const result = categories.filter((c) => c.selected === true);
    setSelectedCategories(result);
    //console.log({ result });
  }, [categories]);

  return { apps: filteredApps, categories: selectedCategories };
};

export default AppListBL;

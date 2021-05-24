import React, { useEffect, useState } from "react";

const CategoriesSelectorBL = () => {
  const [state, setState] = useState();

  useEffect(() => {
    //fetchDataFromAdapter().then(updateState);
  }, []);

  return { state, functions: {} };
};

export default CategoriesSelectorBL;

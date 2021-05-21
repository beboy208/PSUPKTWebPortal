/**
 * Component can sometimes hold the Business Logic and also any State which has to be maintained.
 * In case a component becomes too complex to express Business Logic with your UI,
 * it is good to be able to split it into a seperate bl.tsx file,
 * with your root index.tsx importing all of the functions and handlers from it.
 *
 * Ref: https://hackernoon.com/react-project-structure-best-practices-kh20323x
 */

import React, { useState, useEffect } from "react";
import { adapters } from "../../services/adapters/adpaterA";

export default function Component1Bl() {
  const [state, setState] = useState();

  useEffect(() => {
    //fetchDataFromAdapter().then(updateState);
  }, []);
}

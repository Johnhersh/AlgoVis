import React from "react";

import "./homepage.styles.scss";
import ArraySortingPage from "./arraySortingPage.component";
import FibonacciPage from "./fibonacciPage.component";

export default function HomePage(props: any) {
  return (
    <div className="arrayPageContainer">
      <FibonacciPage />
    </div>
  );
}

import React from "react";

import "./homepage.styles.scss";
import ArraySortingPage from "./arraySortingPage.component";

export default function HomePage(props: any) {
  return (
    <div className="arrayPageContainer">
      <ArraySortingPage />
    </div>
  );
}

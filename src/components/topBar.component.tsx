import React from "react";

import "./topBar.styles.scss";

export default function TopBar(props: any) {
  return <div className="topBarContainer">{props.children}</div>;
}

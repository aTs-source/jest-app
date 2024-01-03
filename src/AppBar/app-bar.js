import React, { useContext } from "react";
import { AppContext } from "../store/ContextAPI";

function AppBar() {
  const { tabs, setTabs } = useContext(AppContext);

  return (
    <div>
      <h1>AppBar</h1>
      {tabs?.map((tab, index) => (
        <h3 key={index}>{tab?.label}</h3>
      ))}
      {/* <input type="text" placeholder="Name" name="name" id="name" /> */}
    </div>
  );
}

export default AppBar;

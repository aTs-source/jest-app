import React, { useContext } from "react";
import { AppContext } from "../store/ContextAPI";

function AppBar() {
  const { tabs, setTabs } = useContext(AppContext);

  function handleClick (){
    console.log("Function Works")
  }

  return (
    <div>
      <h1>AppBar</h1>
      {tabs?.map((tab, index) => (
        <button role="button" key={index} onClick={handleClick}>{tab?.label}</button>
      ))}
      {/* <input type="text" placeholder="Name" name="name" id="name" /> */}
    </div>
  );
}

export default AppBar;

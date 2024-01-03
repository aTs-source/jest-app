import { render, screen } from "@testing-library/react";
import AppBar from "../AppBar/app-bar";
import { AppContext } from "../store/ContextAPI";

test("adds 1 + 2 to equal 3", () => {
  const tabs = [
    {
      label: "Home",
    },
    {
      label: "Settings",
    },
    {
      label: "Contact",
    },
  ];

  const setTabs = () => {};

  render(
    <AppContext.Provider value={{ tabs, setTabs }}>
      <AppBar />
    </AppContext.Provider>
  );

  const txt = screen.getByText("Home");

  expect(txt).toBeInTheDocument();
});

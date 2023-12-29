import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const textbox = screen.getByRole("textbox");
  const linkElement = screen.getByPlaceholderText("Name");
  expect(linkElement).toBeInTheDocument();
  expect(textbox).toHaveAttribute("name");
  expect(textbox).toHaveAttribute("id", "name");
});

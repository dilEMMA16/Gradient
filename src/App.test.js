import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders switch it up button", () => {
  render(<App />);
  const linkElement = screen.getByText(/switch it up/i);
  expect(linkElement).toBeInTheDocument();
});

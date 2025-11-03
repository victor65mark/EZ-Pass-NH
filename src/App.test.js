import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders EZ Pass NH header", () => {
  render(<App />);
  const linkElement = screen.getByText(/EZ Pass NH/i);
  expect(linkElement).toBeInTheDocument();
});

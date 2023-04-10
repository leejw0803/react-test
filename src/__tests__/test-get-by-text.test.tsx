import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestGetByText from "../components/test-get-by-text";

describe("MyComponent", () => {
  it("renders the text", () => {
    render(<TestGetByText />);
    const result = screen.getByText("This is component for testing");
    expect(result).toBeInTheDocument();
  });
});

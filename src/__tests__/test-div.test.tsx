import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import { } from '@testing-library/jest-dom';
import TestDiv from "../test-div";

describe("MyComponent", () => {
  it("renders the text", () => {
    render(<TestDiv />);
    const result = screen.getByText("This is component for testing");
    expect(result).toBeInTheDocument();
  });
});

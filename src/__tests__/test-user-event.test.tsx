import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import TestUserEvent from "../components/test-user-event";

describe("MyComponent", () => {
  it("button click", async () => {
    render(<TestUserEvent />);

    const before = screen.getByText("not clicked");
    expect(before).toBeInTheDocument();

    await userEvent.click(screen.getByText("button"));

    const after = screen.getByText("clicked");
    expect(after).toBeInTheDocument();
  });
});

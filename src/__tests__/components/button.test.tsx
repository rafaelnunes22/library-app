import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("Render", () => {
  it("Should render the component", () => {
    const { queryByText } = render(<Button>Click Here</Button>);
    expect(queryByText(/Click Here/i)).toBeTruthy();
  });
})
import React from "react";
import { render } from "@testing-library/react";
import { Input } from "../../components/Input";

describe("Render", () => {
  it("Should render the component", () => {
    const { queryByPlaceholderText } = render(
      <Input placeholder="Write here" />);
    expect(queryByPlaceholderText(/Write here/i)).toBeTruthy();
  });
})
import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../../components/Card";

describe("Render", () => {
  it("Should render the component", () => {
    const { queryByText, queryByAltText } = render(
      <Card title="Book Title" image_url="Book Image" />);

    expect(queryByText(/Book Title/i)).toBeTruthy();
    expect(queryByAltText(/Book Title/i)).toBeTruthy();
  });
})
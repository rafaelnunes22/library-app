import React from "react";
import { render } from "@testing-library/react";
import { Grid } from "../../components/Grid";

describe("Render", () => {
  it("Should render the component", () => {
    const { queryByRole } = render(
      <Grid>

      </Grid>);
    expect(queryByRole(/grid/i)).toBeTruthy();
  });
})
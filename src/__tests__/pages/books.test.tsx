import React from "react";
import { render, screen } from "@testing-library/react";
import { Books } from "../../pages/Books";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store, } from "../../app/store";

describe("Render", () => {
  it("Should render books screen", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Books />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Logout")).toBeTruthy();
  });
})
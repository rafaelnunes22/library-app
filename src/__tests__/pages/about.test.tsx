import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "../../pages/About";
import { Provider } from "react-redux";
import { setBook } from "../../app/features/book";
import { MemoryRouter } from "react-router";

import { store } from "../../app/store";

const result = {
  id: "id",
  title: "book title",
  description: "description",
  image_url: "image_url",
  release_date: "2001-12-22",
  is_rented: false,
  user_id: undefined
}

describe("Render", () => {
  it("Should render the book informations", () => {
    store.dispatch(setBook(result))
    render(
      <MemoryRouter>
        <Provider store={store}>
          <About />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("book title")).toBeTruthy();
    expect(screen.getByText("description")).toBeTruthy();
  });
})
import { render, screen } from "@testing-library/react";
import { Login } from "../../pages/Login";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../../app/store";

describe("Render", () => {
  it("Should render login screen", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText("Username")).toBeTruthy();
    expect(screen.getByPlaceholderText("Password")).toBeTruthy();

  });
})
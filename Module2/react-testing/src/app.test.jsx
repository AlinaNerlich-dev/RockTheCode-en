/**
 * @vitest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  //TEST 1 Should render the correct element
  test("Should render the correct element", () => {
    render(<App />);
    expect(screen.getByAltText("giphy")).toBeInTheDocument();
  });
  //TEST 2 Should render the correct element
  test("Should render the correct img with alt text", () => {
    render(<App />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "giphy");
  });
  test("Should render the correct name after user interaction", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Enter your name");
    expect(screen.getByText("Hello,")).toBeInTheDocument;
    userEvent.type(inputElement, "Mark");
    waitFor(() =>
      expect(screen.queryByText("Hello, Mark")).toBeInTheDocument()
    );
  });
});

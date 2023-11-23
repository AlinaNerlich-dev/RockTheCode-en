/**
 * @vitest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Footer, { socialLogos } from "./Footer";

describe("Footer", () => {
  // TEST1 - Should render correct elements
  test("Should render correct elements", () => {
    render(<Footer />);
    expect(
      screen.getByText("Created with love by Mark Bodenchak")
    ).toBeInTheDocument();
  });
  // TEST2 - Should render social media logos
  test("Should render social media logos", () => {
    render(<Footer />);
    waitFor(() =>
      socialLogos.forEach((logo) => {
        expect(screen.getByAltText(logo.alt)).toBeVisible();
      })
    );
  });
});

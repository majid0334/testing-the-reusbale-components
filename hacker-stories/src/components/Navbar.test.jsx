import Navbar from "./Navbar";
import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByImage,
} from "@testing-library/react";

describe("Check Navigation is defined", () => {
  it("Check if all is defined", () => {
    const text = render(<Navbar />);

    expect(text).toBeDefined();
  });
});

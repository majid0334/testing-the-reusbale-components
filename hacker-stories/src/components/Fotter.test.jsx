import Fotter from "./Fotter";
import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByImage,
} from "@testing-library/react";

describe("Check if fotter defined", () => {
  it("see if everything is defined", () => {
    const fotter = render(<Fotter />);
    expect(fotter).toBeDefined();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Test mounting phase", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    const h1 = screen.getByText("Benvenuti in EpiBooks!");
    expect(h1).toBeInTheDocument();
  });
});

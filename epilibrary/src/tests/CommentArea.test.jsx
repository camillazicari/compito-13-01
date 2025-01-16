import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Test mounting phase", () => {
  it("mounts correctly", () => {
    render(<CommentArea />);
    const comments = screen.getByTestId("comments");
    expect(comments).toBeInTheDocument();
  });
});

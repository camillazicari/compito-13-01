import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "../components/SingleBook";
import books from "../data/fantasy.json";

describe("onClick behavior", () => {
  it("changes color correctly", () => {
    render(
      <SingleBook
        book={books[0]}
        asin={books[0].asin}
        changeState={() => {
          CardClick;
        }}
      />
    );
    const card = screen.getByTestId("card");
    const CardClick = () => {
      fireEvent.click(screen.getByTestId("card"));
    };
    CardClick();
    expect(card).toHaveProperty(["style", "border"], "3px solid red");
  });
});

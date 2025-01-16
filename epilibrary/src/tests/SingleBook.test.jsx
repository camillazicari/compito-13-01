import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "../components/SingleBook";
import books from "../data/fantasy.json";
import BookList from "../components/BookList";

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
      fireEvent.click(card);
    };
    CardClick();
    expect(card).toHaveProperty(["style", "border"], "3px solid red");
  });
  it("changes the color of the second card", () => {
    render(<BookList books={books} />);
    const card = screen.getAllByTestId("card");
    fireEvent.click(card[0]);
    fireEvent.click(card[1]);
    expect(card[0]).not.toHaveProperty(["style", "border"], "3px solid red");
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import books from "../data/fantasy.json";

describe("Test mounting phase", () => {
  it("mounts all the bootstrap cards", async () => {
    render(<BookList books={books} />);
    const booksJSON = books.length;
    const bookCards = await screen.findAllByTestId("book-cards");
    expect(bookCards).toHaveLength(booksJSON);
  });
});

import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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

describe("Test searchbar behavior", () => {
  it("searches correctly", async () => {
    render(<BookList books={books} />);
    const bookCardsBefore = await screen.findAllByTestId("book-cards");
    const searchbar = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchbar, { target: { value: "amer" } });
    const bookCardsAfter = await screen.findAllByTestId("book-cards");
    expect(bookCardsAfter.length).toBeLessThan(bookCardsBefore.length);
  });
});

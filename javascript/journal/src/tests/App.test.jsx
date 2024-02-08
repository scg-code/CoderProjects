import "@testing-library/jest-dom"; // Importing jest-dom library for extended DOM assertions
import { render, screen } from "@testing-library/react"; // Importing render and screen utilities from testing-library/react
import { describe, it, expect, beforeEach } from "vitest"; // Importing describe, it, and expect functions from vitest library
import App from "../components/App"; // Importing the main App component to be tested
import userEvent from "@testing-library/user-event"; // Importing userEvent utility for simulating user interactions


describe("App", () => {
  let document;

  beforeEach(() => {
    document = render(<App />).container;
  });
  // Describe block for testing the App component
  it("renders the Home component", () => {
    // Test case to check if the Home component renders

    expect(document.querySelector("h3")).toHaveTextContent("Journal Entries"); // Asserting that the App component renders the "Journal Entries" heading
  });

  it("renders the CategorySelection component when Create Entry menu item is clicked", async () => {
    // Test case to check if the CategorySelection component renders upon clicking the Create Entry menu item

    await userEvent.click(screen.getByText("Create Entry")); // Simulating a click on the "Create Entry" menu item

    expect(document.querySelector("h3")).not.toBeNull(); // Asserting that the "h3" element is not null, indicating that the CategorySelection component is rendered
    expect(document.querySelector("h3")).toHaveTextContent(
      "Please select a category" // Asserting that the rendered "h3" element contains the text "Please select a category"
    );
  });
});

import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("testing Greeting component", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing in this case

    // Assert
    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
});

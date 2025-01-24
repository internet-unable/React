import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
    test("renders 'Hello world!' as a title", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // Nothing in this case

        // Assert
        const element = screen.getByText("Hello world!");
        expect(element).toBeInTheDocument();
    });

    test("renders 'It is good to see you' if the button was NOT clicked", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // Nothing in this case

        // Assert
        const element = screen.getByText("It is good to see you", {
            exact: false,
        });
        expect(element).toBeInTheDocument();
    });

    test("renders 'Changed!' is the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const button = screen.getByRole("button");
        userEvent.click(button);

        // Assert
        const element = screen.getByText("Changed!");
        expect(element).toBeInTheDocument();
    });

    test("does'nt render 'It is good to see you' if the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const button = screen.getByRole("button");
        userEvent.click(button);

        // Assert
        const element = screen.queryByText("It is good to see you", {
            exact: false,
        });
        expect(element).toBeNull();
    });
});

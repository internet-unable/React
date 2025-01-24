import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("render posts if request succeeds", async () => {
        // Arrange
        render(<Async />);

        // Act

        // Assert
        const liElements = await screen.findAllByRole("listitem");
        expect(liElements).not.toHaveLength(0);
    });
});
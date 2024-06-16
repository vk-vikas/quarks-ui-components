import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("button tests", () => {
  describe("functional tests", () => {
    it("should render", () => {
      render(
        <Button variant="solid" bgColor="red-500">
          My Button
        </Button>
      );
      const buttonElement = screen.getByText("My Button");
      expect(buttonElement).toBeInTheDocument();
    });

    it("should run onClick callback", async () => {
      const onClick = vi.fn();
      render(
        <Button variant="solid" bgColor="red-500" onClick={onClick}>
          click
        </Button>
      );
      const buttonElement = screen.getByText("click");
      await userEvent.click(buttonElement);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("style tests", () => {
    it("should have bg color red", async () => {
      render(
        <Button variant="solid" bgColor="red-500">
          click
        </Button>
      );
      const buttonElement = await screen.findByText("click");
      // expect(buttonElement).toHaveStyle(" background-color: #ef4444 ");
      expect(buttonElement).toHaveClass(`bg-red-500`);
    });

    it("should be disabled", () => {
      render(
        <Button variant="solid" bgColor="red-500" isDisabled>
          click
        </Button>
      );
      const buttonElement = screen.getByText("click");
      expect(buttonElement).toHaveClass(`opacity-60`);
    });

    it("should change color on hover", async () => {
      render(
        <Button variant="solid" bgColor="stone-200">
          click
        </Button>
      );
      const buttonElement = screen.getByText("click");
      userEvent.hover(buttonElement);
      expect(buttonElement).toHaveClass("hover:bg-stone-300");
    });
  });
});

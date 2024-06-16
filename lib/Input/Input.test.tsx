import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Button Tests", () => {
  describe("functional test", () => {
    it("should render", () => {
      render(<Input label="username"></Input>);
      const inputElement = screen.getByText("username");
      expect(inputElement).toBeInTheDocument();
    });

    it("should have placeholder text", () => {
      render(<Input label="username" placeholder="abc@gmail.com"></Input>);
      const inputElement = screen.getByPlaceholderText("abc@gmail.com");
      expect(inputElement).toBeInTheDocument();
    });

    it("should call onValueChange callback", async () => {
      const fn = vi.fn();
      render(
        <Input
          label="username"
          bgColor="red-300"
          inputValue={""}
          onInputValueChange={fn}
          placeholder="abc"
        ></Input>
      );
      const inputElement = screen.getByPlaceholderText("abc");
      await userEvent?.click(inputElement);
      await userEvent.keyboard("g");
      expect(fn).toBeCalled();
    });

    it("should render error message", async () => {
      render(
        <Input
          label="username"
          bgColor="red-300"
          isInvalid={true}
          errorMessage="incorrect username"
        ></Input>
      );
      const errorPara = screen.getByTestId("error-wrapper").querySelector("p");
      console.log(errorPara?.textContent);
      expect(errorPara?.textContent).toBe("incorrect username");
    });
  });

  describe("style test", () => {
    it("should have red background color", () => {
      render(<Input label="username" bgColor="red-300"></Input>);
      const inputElement = screen.getByTestId("input-wrapper");
      expect(inputElement).toHaveClass("bg-red-300");
    });

    it("should have isRequired astrix", () => {
      render(<Input label="username" bgColor="red-300" isRequired></Input>);
      const inputLabel = screen
        .getByTestId("input-wrapper")
        .querySelector("label");
      expect(inputLabel).toHaveClass("after:content-['_*']");
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner Tests", () => {
  describe("functional tests", () => {
    it("should render", () => {
      render(<Spinner spinnerColor="pink-400" />);
      const spinner = screen.getByTestId("spinner-wrapper");
      expect(spinner).toBeInTheDocument();
    });

    it("should render label text with spinner", () => {
      render(<Spinner spinnerColor="pink-400" label="l" />);
      const spinner = screen.getByTestId("spinner-wrapper").querySelector("p");
      console.log(spinner?.textContent);
      expect(spinner).toBeInTheDocument();
    });
  });

  describe("style tests", () => {
    it("should have pink color spinner", () => {
      render(<Spinner spinnerColor="pink-400" />);
      const spinner = screen.getByTestId("spinner-wrapper");
      expect(spinner.querySelector("div")).toHaveClass("border-t-pink-400");
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const fn = vi.fn();

describe("Modal Tests", () => {
  describe("functional test", () => {
    it("should render", () => {
      render(
        <Modal headerText="header" isOpen={true} setIsOpen={fn}>
          modal text
        </Modal>
      );
      const modal = screen.getByTestId("modal-wrapper");
      expect(modal).toBeInTheDocument();
    });

    it("should render correct modal header text", () => {
      render(
        <Modal headerText="header" isOpen={true} setIsOpen={fn}>
          modal text
        </Modal>
      );
      const modal = screen
        .getByTestId("modal-wrapper")
        .querySelector("#modal-header");
      expect(modal?.textContent).toBe("header");
    });

    it("should render correct modal body content", () => {
      render(
        <Modal headerText="header" isOpen={true} setIsOpen={fn}>
          modal text
        </Modal>
      );
      const modal = screen
        .getByTestId("modal-wrapper")
        .querySelector("#modal-body");
      expect(modal?.innerHTML).toBe("modal text");
    });

    it("should render close btn in modal footer", () => {
      render(
        <Modal headerText="header" isOpen={true} setIsOpen={fn}>
          modal text
        </Modal>
      );
      const modal = screen.getByRole("button", { name: "Close" });
      expect(modal).toBeInTheDocument();
    });

    it("should render two buttons in modal footer", () => {
      render(
        <Modal
          headerText="header"
          secondaryButtonText="proceed"
          isOpen={true}
          setIsOpen={fn}
        >
          modal text
        </Modal>
      );
      const modal = screen
        .getByTestId("modal-wrapper")
        ?.querySelector("#modal-footer")
        ?.querySelectorAll("button");
      expect(modal?.length).toBe(2);
    });

    it("should run secondary btn callback", async () => {
      const cb = vi.fn();
      render(
        <Modal
          headerText="header"
          secondaryButtonText="proceed"
          secondaryButtonHanlder={cb}
          isOpen={true}
          setIsOpen={fn}
        >
          modal text
        </Modal>
      );
      const modal = screen.getByText("proceed");
      await userEvent.click(modal);
      expect(cb).toBeCalled();
    });
  });

  describe("style tests", () => {
    it("should render dark mode styles", () => {
      render(
        <Modal headerText="header" theme={"dark"} isOpen={true} setIsOpen={fn}>
          modal text
        </Modal>
      );
      // bg-slate-800 text-slate-200
      const modal = screen.getByTestId("modal-wrapper").querySelector("div");

      expect(modal).toHaveClass("bg-slate-800 text-slate-200");
    });

    it("should have secondary button styles", async () => {
      const cb = vi.fn();
      render(
        <Modal
          headerText="header"
          secondaryButtonText="proceed"
          secondaryButtonHanlder={cb}
          isOpen={true}
          setIsOpen={fn}
          secondaryBtnBgColor="pink-400"
          secondaryBtnTextColor="pink-800"
        >
          modal text
        </Modal>
      );
      const modal = screen.getByText("proceed");
      expect(modal).toHaveClass("bg-pink-400 text-pink-800");
    });
  });
});

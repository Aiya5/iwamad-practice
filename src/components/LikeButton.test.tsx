import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { LikesProvider } from "../context/LikesContext";
import LikeButton from "./LikeButton";

describe("LikeButton", () => {
  it("increments the likes when clicked", async () => {
    const user = userEvent.setup();

    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Like");

    await user.click(button);

    expect(button).toHaveTextContent("1");
  });
});
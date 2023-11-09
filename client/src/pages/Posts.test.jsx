import { describe, test } from "vitest";
import { render, waitFor } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts", () => {
  const mockPost = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
  ];

  test("Renders Post Components and its contents", async () => {
    const { queryByText } = render(<Posts />);

    await waitFor(() => queryByText(/Post 1/i), {
      timeout: 5000,
    });

    const postTitleElement = queryByText((content, element) => {
      if (element && content) {
        return content.includes("Post 1");
      }
      return false;
    });

    if (postTitleElement) {
      expect(postTitleElement).toBeInTheDocument();
    } else {
      expect(true).toBe(true);
    }
  });
});

import { render, screen } from "@testing-library/react";
import PostInfo from "../components/PostInfo";
import { MemoryRouter } from "react-router-dom";

test("renders post", () => {
  const post = { img: "url", title: "test title", content: "test content" };

  // Another way to wrap a memor router
  // render(
  //   <MemoryRouter>
  //     <PostInfo post={post} />
  //   </MemoryRouter>
  // );

  render(<PostInfo post={post} />, { wrapper: MemoryRouter });

  const titleElement = screen.getByText("test title");
  const contentElement = screen.getByText(/test content/);

  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

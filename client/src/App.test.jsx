import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import DashboardLayout from "./components/DashboardLayout";
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("App", () => {
  it("should render successfully - posts", () => {
    render(
      <MemoryRouter>
        <DashboardLayout />
      </MemoryRouter>
    );

    expect(screen.getByText(/Cathy's Blog/i)).toBeInTheDocument();
  });
});

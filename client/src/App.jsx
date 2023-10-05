import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import Write from "./pages/Write.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <SinglePost />,
      },
      {
        path: "write",
        element: <Write />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

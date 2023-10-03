import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "posts/:id",
        element: <SinglePost />,
      },
      {
        path: "create",
        element: <CreatePost />,
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

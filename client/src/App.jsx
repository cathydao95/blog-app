import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
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
        element: <Homepage />,
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

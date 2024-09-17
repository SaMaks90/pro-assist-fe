import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../components";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/services", element: <h2>Services page</h2> },
        { path: "/our-assistants", element: <h2>Our assistants page</h2> },
        { path: "/contacts", element: <h2>Contacts page</h2> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { Routes };

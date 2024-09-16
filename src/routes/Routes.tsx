import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks";
import { Header } from "../components";

const Routes = () => {
  // const { token } = useAuth();

  const routes = [{ path: "/", element: <Header /> }];

  // const routesForPublic = [
  //   {
  //     path: "/",
  //     element: <h3>Home Page</h3>,
  //   },
  // ];

  // const routesForAuthenticatedOnly = [
  //   {
  //     path: "/",
  //     element: <h3></h3>,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <h2>Dashboard</h2>,
  //       },
  //     ],
  //   },
  // ];

  // const routesForNotAuthenticatedOnly = [
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/registration",
  //     element: <Registration />,
  //   },
  // ];

  const router = createBrowserRouter([
    ...routes,
    // ...routesForPublic,
    // ...(!token ? routesForNotAuthenticatedOnly : []),
    // ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export { Routes };

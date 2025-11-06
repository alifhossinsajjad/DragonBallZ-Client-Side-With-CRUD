import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AllModel from "../Pages/AllModel/AllModel";
import PrivetRoutes from "./PrivetRoutes";
import Profile from "../Pages/Profile/Profile";
import AddModels from "../Pages/AddModels/AddModels";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader : () => fetch ("http://localhost:3000/models")
      },
      {
        path: "/all-models",
        Component: AllModel,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivetRoutes>
            <ModelDetails />
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
      {
        path: "/add-model",
        element: (
          <PrivetRoutes>
            <AddModels />
          </PrivetRoutes>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivetRoutes>
            <UpdateModel />
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },

      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

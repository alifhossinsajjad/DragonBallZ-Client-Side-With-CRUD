import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import AddModels from "../Pages/AddModels/AddModels";
import AllModel from "../Pages/AllModel/AllModel";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import Home from "../Pages/Home/Home";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import Profile from "../Pages/Profile/Profile";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import PrivetRoutes from "./PrivetRoutes";
import MyModels from "../Pages/MyModels/MyModels";
import MyDownloads from "../Pages/MyDownloads/MyDownloads";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("http://localhost:3000/models"),
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
      },
      {
        path: "/my-downloads",
        element: (
          <PrivetRoutes>
            <MyDownloads/>
          </PrivetRoutes>
        ),
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
        path: "/my-models",
        element: (
          <PrivetRoutes>
            <MyModels />
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

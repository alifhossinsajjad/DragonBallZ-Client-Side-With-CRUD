import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import AddModels from "../Pages/AddModels/AddModels";
import AllModel from "../Pages/AllModel/AllModel";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import Home from "../Pages/Home/Home";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import MyDownloads from "../Pages/MyDownloads/MyDownloads";
import MyModels from "../Pages/MyModels/MyModels";
import Profile from "../Pages/Profile/Profile";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import PrivetRoutes from "./PrivetRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("https://dragon-ball-server.vercel.app/models"),
      },
      {
        path: "/all-models",
        Component: AllModel,
        loader: () => fetch("https://dragon-ball-server.vercel.app/models"),
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
            <MyDownloads />
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
          fetch(`https://dragon-ball-server.vercel.app/models/${params.id}`),
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

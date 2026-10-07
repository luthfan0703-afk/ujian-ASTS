import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import CardDetail from "@/pages/CardDetail";
import About from "@/pages/About";
import Testimony from "@/pages/Testimony";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/NotFound";
import RootLayout from "@/layouts/RootLayout";

export const routerWeb = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimony",
        element: <Testimony />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "detail/:slug",
        element: <CardDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

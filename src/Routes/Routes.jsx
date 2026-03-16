import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=>fetch("/booksData.json"),
        HydrateFallback: ()=> <span className="loading loading-spinner loading-xl"></span>,
        path: '/',
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/details/:id',
        loader: ()=>fetch("/booksData.json"),
        HydrateFallback: ()=> <span className="loading loading-spinner loading-xl"></span>,
        Component: Details
      }
    ]
  },
]);
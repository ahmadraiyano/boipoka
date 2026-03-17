import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        HydrateFallback: () => (
          <div className="flex h-screen items-center justify-center">
            <span className="loading w-72 bg-gray-300 loading-spinner loading-xl"></span>
          </div>
        ),
        path: "/",
        Component: Home,
      },
      {
        path: "/listedBooks",
        loader: () => fetch("/booksData.json"),
        HydrateFallback: () => (
          <div className="flex h-screen items-center justify-center">
            <span className="loading w-72 bg-gray-300 loading-spinner loading-xl"></span>
          </div>
        ),
        Component: ListedBooks,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/booksData.json"),
        HydrateFallback: () => (
          <div className="flex h-screen items-center justify-center">
            <span className="loading w-72 bg-gray-300 loading-spinner loading-xl"></span>
          </div>
        ),
        Component: Details,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPages from "../Pages/SignUpPage/SignUpPages";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import Bookmark from "../Pages/Bookmark/Bookmark";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Author from "../Component/Author/Author";
import Content from "../Component/Content/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "blogDetails/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },

          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },

      {
        path: "author",
        element: <Author />,
      },

      {
        path: "bookmark",
        element: <Bookmark />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPages />,
      },
    ],
  },
]);

export default router;

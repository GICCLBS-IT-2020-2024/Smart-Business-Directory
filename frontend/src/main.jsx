import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AccountSetting from "./pages/AccountSetting";
import BizGPT from "./pages/BizGPT";
import About from "./pages/About";
import Counselling from "./pages/Counselling";
import ManageBlogs from "./pages/ManageBlogs";
import ManageCategories from "./pages/ManageCategories";
import ProfileLayout from "./layouts/ProfileLayout";
import BusinessList from "./pages/BusinessList";
import AddBlogs from "./pages/AddBlogs";
import BlogByCategory from "./pages/BlogByCategory";
import Business from "./pages/Business";
import store from "./store/store";
import { Toaster } from "@/components/ui/toaster";
import { categoriesLoader } from "./lib/loaders/categoriesLoader";
import { blogsByCategoryLoader } from "./lib/loaders/blogsByCategoryLoader";
import { blogsDataToEditLoader } from "./lib/loaders/blogsDataToEditLoader";
import { fullBlogDataLoader } from "./lib/loaders/fullBlogDataLoader";
import "./index.css";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { latestBlogsLoader } from "./lib/loaders/latestBlogsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: categoriesLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: latestBlogsLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "ai-bot",
        element: <BizGPT />,
      },
      {
        path: ":category",
        element: <BlogByCategory />,
        loader: blogsByCategoryLoader,
      },
      {
        path: "counselling/",
        element: <Counselling />,
      },
      {
        path: "profile/",
        element: (
          <ProtectedLayout>
            <ProfileLayout />
          </ProtectedLayout>
        ),
        children: [
          {
            index: true,
            element: <AccountSetting />,
          },
          {
            path: "manage-blogs",
            element: <ManageBlogs />,
          },
          {
            path: "manage-categories",
            element: <ManageCategories />,
          },
        ],
      },
      {
        path: "businesses/",
        children: [
          { index: true, element: <BusinessList /> },
          {
            path: ":blogId",
            element: <Business />,
            loader: fullBlogDataLoader,
          },
          {
            path: "add-business",
            children: [
              {
                index: true,
                element: (
                  <ProtectedLayout>
                    <AddBlogs />
                  </ProtectedLayout>
                ),
              },
              {
                path: ":blogId",
                element: (
                  <ProtectedLayout>
                    <AddBlogs />
                  </ProtectedLayout>
                ),
                loader: blogsDataToEditLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

if (typeof window !== "undefined" && !window.setImmediate) {
  window.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

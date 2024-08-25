import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AccountSetting from "./pages/AccountSetting";
import CounselNewBusiness from "./pages/CounselNewBusiness";
import CounselExistBusiness from "./pages/CounselExistBusiness";
import BizGPT from "./pages/BizGPT";
import About from "./pages/About";
import Counselling from "./pages/Counselling";
import ManageBlogs from "./pages/ManageBlogs";
import ManageCategories from "./pages/ManageCategories";
import MySaved from "./pages/MySaved";
import ManageAssistants from "./pages/ManageAssistants";
import ProfileLayout from "./layouts/ProfileLayout";
import BusinessList from "./pages/BusinessList";
import AddBlogs from "./pages/AddBlogs";
import BlogByCategory from "./pages/BlogByCategory";
import Business from "./pages/Business";
import BusinessEditForm from "./pages/BusinessEditForm";
import store from "./store/store";
import { Toaster } from "@/components/ui/toaster";
import { areasAndCategoriesLoader } from "./lib/loaders/areas_categories_Loader";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: areasAndCategoriesLoader,
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
        path: "ai-bot",
        element: <BizGPT />,
      },
      { path: ":category", element: <BlogByCategory /> },
      {
        path: "counselling/",

        children: [
          { index: true, element: <Counselling /> },
          {
            path: "new-business",
            element: <CounselNewBusiness />,
          },
          {
            path: "exist-business",
            element: <CounselExistBusiness />,
          },
        ],
      },
      {
        path: "profile/",
        element: <ProfileLayout />,
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
            path: "my-saved",
            element: <MySaved />,
          },
          {
            path: "manage-categories",
            element: <ManageCategories />,
          },
          {
            path: "manage-assistants",
            element: <ManageAssistants />,
          },
        ],
      },
      {
        path: "businesses/",

        children: [
          { index: true, element: <BusinessList /> },
          {
            path: "edit-business",
            element: <BusinessEditForm />,
          },
          {
            path: "add-business",
            element: <BusinessEditForm />,
          },
          {
            path: ":businessId",
            element: <Business />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

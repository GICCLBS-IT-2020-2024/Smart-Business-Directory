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
import MyBusinesses from "./pages/MyBusinesses";
import ManageCategories from "./pages/ManageCategories";
import MySaved from "./pages/MySaved";
import ManageAssistants from "./pages/ManageAssistants";
import ProfileLayout from "./layouts/ProfileLayout";
import BusinessList from "./pages/BusinessList";
import Business, { loader as BusinessLoader } from "./pages/Business";
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
      {
        path: "counselling",
        element: <Counselling />,
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
            element: <MyBusinesses />,
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
        path: "business-list",
        element: <BusinessList />,
      },
      {
        path: "edit-business",
        element: <BusinessEditForm />,
      },
      {
        path: ":businessId",
        element: <Business />,
        loader: BusinessLoader,
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

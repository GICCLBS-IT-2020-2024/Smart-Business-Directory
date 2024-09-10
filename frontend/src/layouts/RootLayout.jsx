import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { setCategories } from "@/store/states/categories";
import useVerifyToken from "@/hooks/useVerifyToken";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import isEmptyObject from "@/lib/isEmptyObject";
import Spinner from "@/components/common/Spinner";

export default function RootLayout() {
  const { isLoading, error, verifyToken } = useVerifyToken();
  const dispatch = useDispatch();
  const data = useLoaderData();

  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      await verifyToken(token);
    })();
    if (!data.errors) {
      dispatch(setCategories(data.category));
    } else {
      console.error(data.errors);
    }
  }, []);

  useEffect(() => {
    if (!isEmptyObject(error)) {
      toast(
        <div className="text-destructive">
          Your token has been expired please login again.
        </div>,
        {
          duration: 2000,
        }
      );
    }
  }, [error]);

  return (
    <div className="paragraph flex flex-col min-h-svh">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <ScrollRestoration />
          <Outlet />
          <Toaster />
          <Footer />
        </>
      )}
    </div>
  );
}

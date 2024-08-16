import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openRegister, openRegister2 } from "@/store/states/authStatus";

export default function BizGPT() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.userData);
  const openRegisterValue = useSelector((state) => state.authStatus.value);

  // I am changing value of openRegister in "Register" or "register2" because i want that every time register dialog open when someone tries to access protected routes and he is not logged in. It was necessary to change in between two values because register dialogue dependency is registerValue if it dos`nt change then dialogue will open only first time.
  useEffect(() => {
    if (
      (openRegisterValue === "Register" || openRegisterValue === "") &&
      !isLoggedIn
    ) {
      dispatch(openRegister2());
    } else if (
      (openRegisterValue === "Register2" || openRegisterValue === "") &&
      !isLoggedIn
    ) {
      dispatch(openRegister());
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <div className="flex-grow">AI Bot</div>;
}

import { json } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedForAdmin({ children }) {
  const role = useSelector((state) => state.userData.data.userData.role);

  if (role === "user") {
    throw new Error(
      JSON.stringify({
        statusText: "Access Denied",
        status: 403,
        message: "You are not authorized to access this page",
      })
    );
  }
  return children;
}

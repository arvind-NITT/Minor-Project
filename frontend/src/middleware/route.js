import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

export default function Protected({ children }){
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to={"/"}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export function Public({ children }){
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );
};

export function HOD({ children }){
  const userinfo = jwtDecode(localStorage.getItem("token"));

  if (userinfo.found.role==="HOD") {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      replace={true}
    ></Navigate>
  );

};
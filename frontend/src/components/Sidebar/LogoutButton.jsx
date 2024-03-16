import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import AuthService from "../../service/auth-service";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    AuthService.logOut()
      .then((res) => {
        toast.success("Logout successfully !");
        localStorage.removeItem("chat-user");
        setAuthUser(null);
      })
      .catch((e) => {
        const errMessage = e.response
          ? e.response.data.error
          : "Server Error! Please wait or contact us.";
        toast.error(errMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <span className="flex gap-1 text-white">
          <TbLogout2
            onClick={handleLogout}
            className="w-6 h-6  cursor-pointer hover:text-pink-600"
          />
          <span className="hover:cursor-default">Logout</span>
        </span>
      )}
    </div>
  );
};

export default LogoutButton;

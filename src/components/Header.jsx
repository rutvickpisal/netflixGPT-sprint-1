import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        console.log("Sign Out Error ", error);
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      ></img>
      {user && <div className="flex p-2 items-center">
        <img alt={user?.email} src={user.photoURL} className="w-14 h-12 rounded-sm"></img>
        <button
          className="font-bold text-white p-2"
          onClick={() => handleSignOut()}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;

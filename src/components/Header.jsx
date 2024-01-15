import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = auth.currentUser

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch())
  }
  const isGPTActive = useSelector(store => store.gptSearch.isGptSearchActive)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } else {
        navigate("/")
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      ></img>
      {user && <div className="flex p-2 items-center">
        <button className="px-4 py-2 bg-blue-900 text-white rounded-md font-semibold mx-4 hover:bg-blue-700" onClick={handleGptSearch}>{!isGPTActive ? "GptSearch": "HomePage"}</button>
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

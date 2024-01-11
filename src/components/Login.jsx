import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();

  const handleSignInUp = (e) => {
    e.preventDefault();
    //Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Sign In or Sign Up logic
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            email: email.current.value,
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/48404451?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage("User Already in use");
          }
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (

    <>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          alt="netflix_background_poster"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <form className="w-[400px] p-12 bg-black absolute m-24 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80">
        <h1 className="font-semibold text-3xl py-2 my-2 rounded-md">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full rounded-sm bg-gray-500"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or Phone number"
          className={`p-3 my-2 w-full rounded-sm bg-gray-500 ${
            errorMessage !== null ? "border-b-2 border-orange-500" : ""
          }`}
          ref={email}
        ></input>

        <input
          type="password"
          placeholder="Password"
          className={`p-3 my-2 w-full rounded-sm bg-gray-500 ${
            errorMessage !== null ? "border-b-2 border-orange-500" : ""
          }`}
          ref={password}
        ></input>
        {errorMessage !== null && (
          <p className="font-semibold text-orange -500">{errorMessage}</p>
        )}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-sm mt-8 font-semibold"
          onClick={(e) => handleSignInUp(e)}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignInForm
            ? "Aleady Registered? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </>
  );
};

export default Login;

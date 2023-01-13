import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth,  googleProvider } from "./firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center ">
      <Link to="/">
        <img
          className="w-[150px] my-[20px] object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="w-[300px] h-fit p-[20px] border-[1px] border-gray-150 flex flex-col items-center">
        <h1>Sign in</h1>
        <button
          className="button w-full mt-[10px]"
          onClick={() => signInWithPopup(auth, googleProvider)}
        >
          Sign in with Google
        </button>
        <p className="mt-[15px] text-xs font-medium">
          By signing-in you agree with Amazone&apos;s Condition of Use and
          Sales. Please see our Condition Notice, our Cookies Notice and out
          Interest-Based Ads Notice
        </p>
      </div>
    </div>
  );
};

export default Login;

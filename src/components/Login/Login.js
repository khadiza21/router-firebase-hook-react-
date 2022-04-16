import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <h3>Please LogIn</h3>

      <div style={{ margin: "20px" }}>
        <button onClick={() => signInWithGoogle()}>Google Sign In</button>
      </div>

      <form>
        <input type="email" placeholder="Your Email" />
        <br /> <br />
        <input type="password" placeholder="Your Password" />
        <br /> <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
};

export default Login;

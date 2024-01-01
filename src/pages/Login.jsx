import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Logo from "../assets/img/logo.svg";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      });
  }

  return (
    <div className="relative bg-white">
      <img src={Logo} alt="logo" className="h-[90px] absolute left-5 top-5" />
      <div className="absolute right-10 top-10">
        <span className="mr-4">Not a simpleCRM user?</span>{" "}
        <Link to="/signup">
          <button className="bg-[#38B6FF] hover:bg-[#7fcbf7] text-white py-2 px-5 transition-all">
            Sign up
          </button>
        </Link>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-6 p-12 shadow-3xl items-center w-[500px] bg-white"
          onSubmit={handleLogin}
        >
          <div className="border-b-2 border-[#38B6FF] w-[150px] mb-4">
            <h2 className="text-4xl text-center mb-3">Login</h2>
          </div>
          <input
            className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#38B6FF]"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#38B6FF]"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-8">
            <button
              className="bg-[#38B6FF] hover:bg-[#7fcbf7] text-white py-2 px-5 transition-all"
              type="submit"
            >
              Login
            </button>
            <button className="border border-gray-300 hover:border-[#7fcbf7] py-2 px-5 transition-all">
              Guest log in
            </button>
          </div>
          {error && (
            <span className="mt-3 text-red-600 text-sm text-center">
              Wrong email or password
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

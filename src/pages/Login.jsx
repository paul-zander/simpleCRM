import { useState, useContext, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Logo from "../assets/img/logo.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(() => {
    // Check if the animation has already completed from localStorage
    const storedAnimation = JSON.parse(localStorage.getItem("logoAnimation"));
    return storedAnimation !== null ? storedAnimation : true;
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    // Start the animation and then stop it after 2 seconds
    const animationTimeout = setTimeout(() => {
      setLogoAnimation(false);
      localStorage.setItem("logoAnimation", JSON.stringify(false));
    }, 1500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      });
  }

  function handleGuestLogin(e) {
    e.preventDefault();
    dispatch({ type: "GUESTLOGIN", payload: "Guest" });
    localStorage.setItem("currentUser", "Guest");
    navigate("/");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative bg-white">
      {/* Overlay */}
      {logoAnimation && <div className="fixed inset-0 bg-white z-10"></div>}
      <img
        src={Logo}
        alt="logo"
        className={`absolute transition-all duration-1000 ease-in-out z-20 ${
          logoAnimation
            ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px]"
            : "top-5 left-5 h-[90px]"
        }`}
      />
      <div className="absolute flex flex-col gap-2 items-center top-36 right-1/2 translate-x-1/2 md:flex-row md:translate-x-0 md:right-10 md:top-10">
        <span className="text-center">Not a simpleCRM user?</span>{" "}
        <Link to="/signup">
          <button className="bg-[#38B6FF] hover:bg-[#7fcbf7] text-white py-2 px-5 transition-all">
            Sign up
          </button>
        </Link>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-6 p-12 shadow-3xl items-center w-[300px] md:w-[500px] bg-white"
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
          <div
            className={`${
              passwordError ? "border-red-600" : "border-gray-300"
            } flex justify-between w-full border p-3 focus-within:border-[#38B6FF]`}
          >
            <input
              className="w-full focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="cursor-pointer"
              onClick={() => togglePasswordVisibility("password")}
            >
              {showPassword ? (
                <VisibilityIcon className="text-gray-500" />
              ) : (
                <VisibilityOffIcon className="text-gray-500" />
              )}
            </div>
          </div>
          <div className="flex gap-8">
            <button
              className="bg-[#38B6FF] hover:bg-[#7fcbf7] text-white py-2 px-5 transition-all"
              type="submit"
            >
              Login
            </button>
            <button
              className="border border-gray-300 hover:border-[#7fcbf7] py-2 px-5 transition-all"
              onClick={handleGuestLogin}
            >
              Guest log in
            </button>
          </div>
          {error && (
            <span className="mt-3 text-red-600 text-sm text-center">
              Wrong email or password.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

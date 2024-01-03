import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Logo from "../assets/img/logo.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Login() {
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [alreadyInUseError, setAlreadyInUseError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  async function handleSignup(e) {
    e.preventDefault();
    if (checkConfirmationPassword() === false) return;

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     user.displayName = name;
    //     toast.success("Successfully registered!");
    //     setAlreadyInUseError(false);
    //     setEmailError(false);
    //     setPasswordError(false);
    //     // ...
    //     setTimeout(() => {
    //       navigate("/login");
    //     }, 2000);
    //   })

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with displayName
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // Signed up successfully
      toast.success("Successfully registered!");
      setAlreadyInUseError(false);
      setEmailError(false);
      setPasswordError(false);

      // ...
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);

      errorCode === "auth/weak-password" &&
        setPasswordError("Weak password. Please use at least 6 characters.");
      errorCode === "auth/invalid-email" && setEmailError("Invalid email.");
      errorCode === "auth/email-already-in-use" &&
        setAlreadyInUseError("Email already in use.");

      // ..
    }

    // TODO: danach zu login weiterleiten
  }

  function checkConfirmationPassword() {
    if (password === confirmPassword) {
      console.log("confirmed");
      return true;
    } else {
      setPasswordError("Passwords do not match.");
      return false;
    }
  }

  return (
    <div className="relative bg-sky-50">
      <Toaster />
      <img src={Logo} alt="logo" className="h-[90px] absolute left-5 top-5" />
      <div className="h-screen flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-6 p-12 shadow-3xl items-center w-[300px] sm:w-[500px] relative bg-white"
          onSubmit={handleSignup}
        >
          <Link to="/login" title="Back to login page">
            <ArrowBackIcon className="absolute left-6 top-6 cursor-pointer" />
          </Link>
          <div className="border-b-2 border-[#38B6FF] w-[150px] mb-4">
            <h2 className="text-4xl text-center mb-3">Sign up</h2>
          </div>
          <input
            className={`${
              emailError ? "border-red-600" : "border-gray-300"
            } w-full border  p-3 focus:outline-none focus:border-[#38B6FF]`}
            type="name"
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={`${
              emailError ? "border-red-600" : "border-gray-300"
            } w-full border  p-3 focus:outline-none focus:border-[#38B6FF]`}
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
          <div
            className={`${
              passwordError ? "border-red-600" : "border-gray-300"
            } flex justify-between w-full border p-3 focus-within:border-[#38B6FF]`}
          >
            <input
              className="w-full focus:outline-none"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className="cursor-pointer"
              onClick={() => togglePasswordVisibility("confirm")}
            >
              {showConfirmPassword ? (
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
              Sign up
            </button>
          </div>
          {(passwordError || emailError || alreadyInUseError) && (
            <span className="mt-3 text-red-600 text-sm text-center">
              {passwordError || emailError || alreadyInUseError}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

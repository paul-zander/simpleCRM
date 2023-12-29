import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.jsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

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
    <div className="h-screen flex items-center justify-center">
      <form
        className="flex flex-col gap-3 p-8 shadow-3xl"
        onSubmit={handleLogin}
      >
        <input
          className="w-[200px] border p-1"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[200px] border p-1"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-sky-400 text-white" type="submit">
          Login
        </button>
        {error && (
          <span className="mt-3 text-red-600 text-sm text-center">
            Wrong email or password
          </span>
        )}
      </form>
    </div>
  );
}

export default Login;

import { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

function Authreducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(Authreducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };

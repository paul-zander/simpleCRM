import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import List from "./pages/List.jsx";
import Single from "./pages/Single.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import NewTransaction from "./pages/NewTransaction.jsx";
import { userInputs, productInputs } from "./formSource.jsx";
import { AuthContext } from "./contexts/AuthContext.jsx";
import { useContext } from "react";
import { userColumns, productColumns } from "./datatablesource.jsx";
import Transactions from "./pages/Transactions.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);

  function RequireAuth({ children }) {
    return currentUser ? children : <Navigate to="/login" />;
  }

  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/">
          <Route path="signup" element={<Signup />} />
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List columns={userColumns} category="users" />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="edit"
              element={
                <RequireAuth>
                  <Edit />
                </RequireAuth>
              }
            />
            <Route
              path="edit/:userId"
              element={
                <RequireAuth>
                  <Edit />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <RequireAuth>
                  <List columns={productColumns} category="products" />
                </RequireAuth>
              }
            />
            <Route
              path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={productInputs} title="Add New Product" />
                </RequireAuth>
              }
            />
            <Route
              path="edit/:productId"
              element={
                <RequireAuth>
                  <Edit />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="transactions" element={<Transactions />} />
          <Route path="add-transaction" element={<NewTransaction />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

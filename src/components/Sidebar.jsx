import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Sidebar() {
  const auth = getAuth();
  function logOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        console.log("An error happened.");
      });
  }
  return (
    <div className="flex-1  min-h-screen bg-white shadow-3xl">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/">
          <span className="text-lg font-bold text-purple-800">SimpleCRM</span>
        </Link>
      </div>
      <div className="pl-[10px]">
        <ul className="list-none">
          <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">MAIN</p>
          <Link to="/">
            <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
              <SpaceDashboardOutlinedIcon fontSize="small" />
              <span className="text-gray-700 ml-2">Dashboard</span>
            </li>
          </Link>
          <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">LISTS</p>
          <Link to="/users">
            <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
              <Person2OutlinedIcon fontSize="small" />
              <span className="text-gray-700 ml-2">Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
              <Inventory2OutlinedIcon fontSize="small" />
              <span className="text-gray-700 ml-2">Products</span>
            </li>
          </Link>
          <Link to="/transactions">
            <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
              <CreditCardOutlinedIcon fontSize="small" />
              <span className="text-gray-700 ml-2">Transactions</span>
            </li>
          </Link>
          <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">
            USEFUL
          </p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
            <SignalCellularAltOutlinedIcon fontSize="small" />
            <span className="text-gray-700 ml-2">Stats</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
            <NotificationsNoneOutlinedIcon fontSize="small" />
            <span className="text-gray-700 ml-2">Notifications</span>
          </li>
          <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">
            SERVICE
          </p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
            <span className="text-gray-700 ml-2">System Health</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
            <span className="text-gray-700 ml-2">Logs</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
            <span className="text-gray-700 ml-2">Settings</span>
          </li>

          <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">USER</p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
            <AccountBoxOutlinedIcon fontSize="small" />
            <span className="text-gray-700 ml-2">Profile</span>
          </li>
          <Link to="/login" onClick={logOut}>
            <li className="flex items-center p-2 cursor-pointer hover:bg-purple-100">
              <LogoutOutlinedIcon fontSize="small" />
              <span className="text-gray-700 ml-2">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center p-2 cursor-pointer hover:bg-purple-100 mt-8">
        <LightModeOutlinedIcon />
        <span className="text-gray-700 ml-2">Theme</span>
      </div>
    </div>
  );
}

export default Sidebar;

import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

function Sidebar() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

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
    <>
      {/* sidebar top */}
      <div className="md:hidden p-4 flex justify-between items-center w-full shadow-md bg-gray-50">
        <Link to="/">
          {/* <span className="text-lg font-bold text-[#1976D2]">SimpleCRM</span> */}
          <img src={Logo} alt="" className="h-[70px]" />
        </Link>
        <div
          className="rounded-full h-12 w-12 shadow-3xl flex justify-center items-center cursor-pointer"
          onClick={() => setSidebarIsVisible(!sidebarIsVisible)}
        >
          {sidebarIsVisible ? (
            <CloseIcon fontSize="small" />
          ) : (
            <MenuIcon fontSize="small" />
          )}
        </div>
      </div>
      {/* main sidebar */}
      <div
        className={`${
          sidebarIsVisible ? "translate-x-0" : "-translate-x-full"
        } w-[200px] min-h-screen shadow-3xl fixed z-50 md:translate-x-0 transition-transform duration-300 ease-in-out p-6 bg-gray-50`}
      >
        <div className="h-[50px] flex items-center justify-center">
          <Link to="/">
            {/* <span className="text-lg font-bold text-[#1976D2]">SimpleCRM</span> */}
            <img src={Logo} alt="" className="h-[100px]" />
          </Link>
        </div>
        <div className="">
          <ul className="list-none">
            <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">
              MAIN
            </p>
            <Link to="/">
              <li
                className={`flex items-center p-2 cursor-pointer hover:bg-sky-100`}
              >
                <SpaceDashboardOutlinedIcon fontSize="small" />
                <span className="text-gray-700 ml-2">Dashboard</span>
              </li>
            </Link>
            <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">
              LISTS
            </p>
            <Link to="/users">
              <li
                className={`flex items-center p-2 cursor-pointer hover:bg-sky-100`}
              >
                <Person2OutlinedIcon fontSize="small" />
                <span className="text-gray-700 ml-2">Users</span>
              </li>
            </Link>
            <Link to="/products">
              <li
                className={`flex items-center p-2 cursor-pointer hover:bg-sky-100`}
              >
                <Inventory2OutlinedIcon fontSize="small" />
                <span className="text-gray-700 ml-2">Products</span>
              </li>
            </Link>
            <Link to="/transactions">
              <li
                className={`flex items-center p-2 cursor-pointer hover:bg-sky-100`}
              >
                <CreditCardOutlinedIcon fontSize="small" />
                <span className="text-gray-700 ml-2">Transactions</span>
              </li>
            </Link>
            {/* <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">
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
          </li> */}

            <p className="text-gray-600 mt-5 mb-1 font-semibold text-sm">
              USER
            </p>
            {/* <li className="flex items-center p-2 cursor-pointer hover:bg-sky-100">
              <AccountBoxOutlinedIcon fontSize="small" />
              <span className="text-gray-700 ml-2">Profile</span>
            </li> */}
            <Link to="/login" onClick={logOut}>
              <li className="flex items-center p-2 cursor-pointer hover:bg-sky-100">
                <LogoutOutlinedIcon fontSize="small" />
                <span className="text-gray-700 ml-2">Logout</span>
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="flex items-center p-2 cursor-pointer hover:bg-purple-100 mt-8">
        <LightModeOutlinedIcon />
        <span className="text-gray-700 ml-2">Theme</span>
      </div> */}
      </div>
    </>
  );
}

export default Sidebar;

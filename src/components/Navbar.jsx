import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useEffect } from "react";

function Navbar() {
  function getInitials(name) {
    const words = name.split(" ");

    const initials = words.map((word) => word.charAt(0));

    return initials.join("");
  }
  const item = localStorage.getItem("currentUser");
  const currentUser = item ? JSON.parse(item) : null;

  return (
    <div
      className="h-[70px] flex items-center text-sm shadow-3xl bg-gray-50
    "
    >
      <div className="w-full p-[20px] flex items-center justify-end">
        {/* <div className="flex items-center p-[3px]">
          <input
            className="placeholder:text-sm outline-none"
            type="text"
            placeholder="Search..."
          />
          <SearchOutlinedIcon />
        </div> */}
        <div className="flex gap-3">
          <div className="flex items-center gap-3">
            <div className="h-[42px] w-[42px] rounded-full flex items-center justify-center bg-sky-300">
              <div className="z-10 h-[40px] w-[40px] rounded-full bg-sky-300 border-white border-2 text-white flex items-center justify-center">
                {getInitials(currentUser.displayName)}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{currentUser.displayName}</span>
              <span className="text-xs text-gray-500">{currentUser.email}</span>
            </div>
          </div>

          {/* <div className="flex items-center mr-[20px] relative">
            <LanguageOutlinedIcon className="text-[20px]" />
            English
          </div>
          <div className="flex items-center mr-[20px] relative">
            <DarkModeOutlinedIcon className="text-[20px]" />
          </div>
          <div className="flex items-center mr-[20px] relative">
            <FullscreenExitOutlinedIcon className="text-[20px]" />
          </div>
          <div className="flex items-center mr-[20px] relative">
            <NotificationsNoneOutlinedIcon className="text-[20px]" />
            <div className="w-[15px] h-[15px] bg-red-400 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute -top-[5px] -right-[5px]">
              1
            </div>
          </div>
          <div className="flex items-center mr-[20px] relative">
            <ChatBubbleOutlineOutlinedIcon className="text-[20px]" />
            <div className="w-[15px] h-[15px] bg-red-400 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute -top-[5px] -right-[5px]">
              2
            </div>
          </div>
          <div className="flex items-center mr-[20px] relative">
            <ListOutlinedIcon className="text-[20px]" />
          </div> */}
          {/* <div className="flex items-center mr-[20px] relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[30px] h-[30px] rounded-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

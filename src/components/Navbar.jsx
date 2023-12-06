import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar() {
  return (
    <div className="h-[50px] flex items-center text-sm border-b">
      <div className="w-full p-[20px] flex items-center justify-between">
        <div className="flex items-center p-[3px]">
          <input
            className="placeholder:text-sm outline-none"
            type="text"
            placeholder="Search..."
          />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-[20px] relative">
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
          </div>
          <div className="flex items-center mr-[20px] relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[30px] h-[30px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

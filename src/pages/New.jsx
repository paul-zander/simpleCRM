import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        {/* top */}
        <div className="shadow-3xl p-[10px] m-[20px] flex">
          <h1 className="text-gray-400 text-md">{title}</h1>
        </div>
        {/* bottom */}
        <div className="shadow-3xl p-[10px] m-[20px] flex">
          {/* left */}
          <div className="flex-1 text-center">
            <img
              className="w-full h-full rounded-full object-cover"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          {/* right */}
          <div className="flex-2">
            <form className="flex flex-wrap gap-[30px] justify-around">
              <div className="w-2/5">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="w-2/5" key={input.id}>
                  <label className="flex items-center gap-[10px]">
                    {input.label}
                  </label>
                  <input
                    className="w-full p-[5px] border-b"
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button className="w-[150px] p-[10px] border-none bg-#008080 text-white text-bold cursor-pointer mt-[10px]">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;

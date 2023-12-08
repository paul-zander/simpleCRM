import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import UploadIcon from "@mui/icons-material/Upload";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth, storage } from "../firebase.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  console.log(file);

  function handleInput(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  async function addData(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className="shadow-3xl p-6 m-[20px] flex">
          {/* left */}
          <div className="flex justify-center flex-1 items-center">
            <img
              className="w-[150px] h-[150px] rounded-full object-cover"
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
            <form
              onSubmit={addData}
              className="flex flex-wrap gap-[30px] justify-around"
            >
              <div className="w-2/5">
                <label className="flex items-center" htmlFor="file">
                  Image:
                  <div className="cursor-pointer ml-3 rounded-full border border-gray-600 h-8 w-8 flex items-center justify-center">
                    <UploadIcon />
                  </div>
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
                    className="w-full p-[5px] border-2 mt-2 outline-none"
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button
                className="w-[150px] p-[10px] border-none bg-[#008080] hover:bg-[#63a5a5] text-white text-bold cursor-pointer mt-[10px]"
                type="submit"
              >
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

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import UploadIcon from "@mui/icons-material/Upload";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase.jsx";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { countries } from "../data/countries.js";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [uploadProgress, setUploadProgress] = useState(null);

  useEffect(() => {
    function uploadFile() {
      const uniqueName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqueName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress.toFixed(0));

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    }

    file && uploadFile();
  }, [file]);

  function handleInput(e) {
    console.log(e.target);
    setData({ ...data, [e.target.id]: e.target.value });
  }

  async function addData(e) {
    e.preventDefault();

    if (title === "Add New User") {
      try {
        const ref = doc(collection(db, "users"));

        await setDoc(ref, {
          ...data,
          timeStamp: serverTimestamp(),
          id: ref.id,
        });

        toast.success("New user added");
        setFile("");
        setData({});
      } catch (error) {
        toast.error("Upload failed. User already exists.");
      }
    } else if (title === "Add New Product") {
      try {
        console.log("trying to add new product");
        console.log(data);
        const productId = new Date().getTime();
        console.log(productId);
        const docRef = await addDoc(collection(db, "products"), {
          ...data,
          timeStamp: serverTimestamp(),
          id: productId,
        });
        const newId = docRef.id;

        await setDoc(doc(db, "products", newId), {
          ...data,
          timeStamp: serverTimestamp(),
          id: newId,
        });
        toast.success("New product added");
        setFile("");
        setData({});
      } catch (error) {
        console.log(error);
        toast.error("Upload failed. Product already exists.");
      }
    }
  }

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-6 ml-[200px]">
        {/* <Navbar /> */}
        <Toaster />
        {/* top */}
        <div className="p-[10px] m-[20px] flex justify-center">
          <h1 className="text-gray-400 text-md">{title}</h1>
        </div>
        {/* bottom */}
        <div className="shadow-3xl p-6 m-[20px] flex flex-col">
          <Link
            to={title === "Add New User" ? "/users" : "/products"}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
          >
            <ArrowBackIcon />
          </Link>
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
              className="flex flex-col gap-6 items-center mt-12 justify-around"
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
                  {input.type === "textarea" ? (
                    <textarea
                      className={`w-full p-[5px] border-2 mt-2 outline-none resize-none ${
                        input.id === "description" ? "h-[150px]" : ""
                      }`}
                      type={input.type}
                      min={input.min}
                      placeholder={input.placeholder}
                      id={input.id}
                      onChange={handleInput}
                      value={data[input.id] || ""}
                      required
                    />
                  ) : (
                    <input
                      className="w-full p-[5px] border-2 mt-2 outline-none resize-none"
                      type={input.type}
                      min={input.min}
                      placeholder={input.placeholder}
                      id={input.id}
                      onChange={handleInput}
                      value={data[input.id] || ""}
                      required
                    />
                  )}
                </div>
              ))}
              {title === "Add New User" && (
                <div className="w-2/5">
                  <label htmlFor="country">Country</label>
                  <select
                    name="countries"
                    id="country"
                    className="w-full p-[5px] border-2 mt-2 outline-none resize-none"
                    onChange={handleInput}
                  >
                    <option value="">Please choose a country</option>
                    {countries.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button
                className={`${
                  uploadProgress !== null && uploadProgress < 100
                    ? "bg-[#0080803d]"
                    : ""
                } w-[150px] p-[10px] border-none bg-[#1976D2] hover:bg-[#7db2e7] text-white text-bold cursor-pointer mt-[10px]`}
                type="submit"
                disabled={uploadProgress !== null && uploadProgress < 100}
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

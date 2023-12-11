import { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [imageSelected, setImageSelected] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  // let isUploading = false;

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

  // async function uploadFile() {
  //   const uniqueName = new Date().getTime() + file.name;
  //   const storageRef = ref(storage, uniqueName);
  //   const uploadTask = uploadBytesResumable(storageRef, file);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // Observe state change events such as progress, pause, and resume
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       setUploadProgress(progress.toFixed(0));

  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       // Handle successful uploads on complete
  //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //         setData((prev) => ({ ...prev, img: downloadURL }));
  //       });
  //     }
  //   );
  // }

  function handleInput(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  console.log("render happended");

  function checkIfImageUploaded() {
    if (file === "") {
      toast.error("Please upload an image.");
      return true;
    }
    return false;
  }

  async function addData(e) {
    e.preventDefault();
    if (checkIfImageUploaded()) {
      return;
    }

    console.log(title);
    if (title === "Add New User") {
      try {
        // await uploadFile();
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        // await uploadFile();

        console.log(data);
        // await setDoc(doc(db, "users", res.user.uid), {
        //   ...data,
        //   timeStamp: serverTimestamp(),
        //   id: res.user.uid,
        // });
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          timeStamp: serverTimestamp(),
          id: res.user.uid,
        });
        console.log(data);
        toast.success("New user added");
        setFile("");
        setData({});
      } catch (error) {
        console.log(error);
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
      <div className="flex-6">
        <Navbar />
        <Toaster />
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
                    min={input.min}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleInput}
                    value={data[input.id] || ""}
                    required
                  />
                </div>
              ))}
              <button
                className={`${
                  uploadProgress !== null && uploadProgress < 100
                    ? "bg-[#0080803d]"
                    : ""
                } w-[150px] p-[10px] border-none bg-[#008080] hover:bg-[#63a5a5] text-white text-bold cursor-pointer mt-[10px]`}
                type="submit"
                disabled={uploadProgress !== null && uploadProgress < 100}
              >
                Send
              </button>
              {/* {isUploading === true && (
                <span>Image Upload Progress: {uploadProgress} %</span>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;

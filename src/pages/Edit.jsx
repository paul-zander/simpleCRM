import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EditUser from "./EditUser";
import EditProduct from "./EditProduct";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Edit() {
  const { userId, productId } = useParams();
  const [data, setData] = useState(null);

  console.log("userId:", userId);
  console.log("productId:", productId);
  useEffect(() => {
    async function getData() {
      const collectionName = userId ? "users" : "products";
      const docRef = doc(db, collectionName, userId || productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    if (userId || productId) {
      getData();
    }
  }, [userId, productId]);

  if (!userId && !productId) {
    // Render fallback UI if neither userId nor productId is present
    return <div>No user or product selected.</div>;
  }

  async function editData(e) {
    e.preventDefault();
    const collectionName = userId ? "users" : "products";
    await setDoc(doc(db, collectionName, userId || productId), data);
    toast.success("Changes successfully uploaded");
  }

  console.log(data);

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <Toaster />
        {userId && (
          <EditUser data={data} editData={editData} setData={setData} />
        )}
        {productId && (
          <EditProduct data={data} editData={editData} setData={setData} />
        )}
      </div>
    </div>
  );
}

export default Edit;

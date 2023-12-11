import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Chart from "../components/Chart.jsx";
import BasicTable from "../components/BasicTable.jsx";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase.jsx";
import { useState, useEffect } from "react";
import SingleUser from "./SingleUser.jsx";
import SingleProduct from "./SingleProduct.jsx";

function SinglePage() {
  const { userId, productId } = useParams();
  console.log(userId, productId);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const docRef = doc(
        db,
        userId ? "users" : "products",
        userId ? userId : productId
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
        console.log(productId);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        console.log(productId);
      }
    }
    getData();
  }, [userId, productId]);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        {/* top */}
        <div className="flex p-[20px] gap-[20px]">
          {/* information card */}
          <div className="flex-1 shadow-3xl p-[20px] relative">
            <div className="absolute top-0 right-0 p-2 text-sm text-purple-600 bg-purple-100 cursor-pointer rounded-bl-md">
              Edit
            </div>
            <h2 className="mb-8 font-bold text-sm uppercase text-gray-400">
              Information
            </h2>
            {userId && <SingleUser data={data} />}
            {productId && <SingleProduct data={data} />}
          </div>
          {/* chart */}
          <div className="flex-2">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        {/* bottom */}
        <div className="p-[20px] shadow-3xl mx-[20px]">
          <h2 className="mb-8 font-bold text-sm uppercase text-gray-400">
            Last Transactions
          </h2>
          <BasicTable />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

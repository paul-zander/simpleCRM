import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Chart from "../components/Chart.jsx";
// import BasicTable from "../components/BasicTable.jsx";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.jsx";
import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate.js";
import SingleUser from "./SingleUser.jsx";
import SingleProduct from "./SingleProduct.jsx";
// import { transactionsColumns } from "../datatablesource";
// import { DataGrid } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";
// import { generatedOrders } from "../data/transactions";

function SinglePage() {
  const { userId, productId } = useParams();

  const [data, setData] = useState([]);
  const [generatedOrders, setGeneratedOrders] = useState([]);

  useEffect(() => {
    async function getData() {
      const docRef = doc(
        db,
        userId ? "users" : "products",
        userId ? userId : productId
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
      }
    }
    getData();
  }, [userId, productId]);

  useEffect(() => {
    async function loadData() {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const formattedOrders = [];

      querySnapshot.forEach((doc) => {
        const formattedTransaction = {
          ...doc.data(),
          date: formatDate(doc.data().date),
          price: +doc.data().price,
        };
        formattedOrders.push(formattedTransaction);
      });

      setGeneratedOrders(formattedOrders);
    }

    loadData();
  }, []);

  return (
    <div className="flex w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex-6 md:ml-[200px]">
        {/* <Navbar /> */}
        {/* top */}
        <div className="flex flex-col p-[20px] gap-[20px]">
          {/* information card */}
          <div className="flex-1 shadow-3xl p-[20px] relative">
            <Link
              to={
                userId ? `/users/edit/${userId}` : `/products/edit/${productId}`
              }
            >
              <div className="absolute top-3 right-3 p-2 text-sm text-sky-600 bg-sky-200 hover:bg-sky-100 cursor-pointer w-[80px] text-center transition-all">
                Edit
              </div>
            </Link>
            <h2 className="mb-8 font-bold text-sm uppercase text-gray-400">
              Information
            </h2>
            {userId && <SingleUser data={data} />}
            {productId && <SingleProduct data={data} />}
          </div>
          {/* chart */}
          <div className="flex-2">
            <Chart
              aspect={3 / 1}
              title={
                userId
                  ? "User Spending (Last 6 Months)"
                  : "Spending for this product (Last 6 Months)"
              }
              generatedOrders={generatedOrders}
              data={data}
            />
          </div>
        </div>
        {/* bottom */}
        <div className="p-[20px] shadow-3xl mx-[20px]">
          <h2 className="mb-8 font-bold text-sm uppercase text-gray-400">
            Last Transactions
          </h2>
          {/* <BasicTable data={transactionsColumns} /> */}
          {/* <Box sx={{ height: "600", width: "100%" }}>
            <DataGrid
              className="datagrid"
              rows={generatedOrders}
              columns={transactionsColumns}
              //   pageSize={1}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[5, 10]}
              //   rowsPerPageOptions={[5]}
              // checkboxSelection
            />
          </Box> */}
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

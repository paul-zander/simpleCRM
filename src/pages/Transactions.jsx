import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import BasicTable from "../components/BasicTable";
// import { generatedOrders } from "../data/transactions";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { transactionsColumns } from "../datatablesource";
import { Link } from "react-router-dom";

// firebase imports
import { doc, getDocs, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.jsx";
import { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      setTransactions(querySnapshot.docs.map((doc) => doc.data()));
    }
    getData();
  }, []);

  const products = transactions.map((order) => order.product);
  const itConsultingForFreelancers = products.filter(
    (product) => product === "IT Consulting for Freelancers"
  );
  const customSoftwareCustomization = products.filter(
    (product) => product === "Custom Software Customization"
  );
  const itSecurityAssessment = products.filter(
    (product) => product === "IT Security Assessment"
  );

  const graphicDesignServices = products.filter(
    (product) => product === "Graphic Design Services"
  );

  const websiteCreationForPersonalBrands = products.filter(
    (product) => product === "Website Creation for Personal Brands"
  );

  const digitalPresenceOptimization = products.filter(
    (product) => product === "Digital Presence Optimization"
  );

  let data = [
    {
      id: "IT Consulting for Freelancers",
      label: "IT Consulting for Freelancers",
      value: itConsultingForFreelancers.length,
      color: "hsl(257, 70%, 50%)",
    },
    {
      id: "Custom Software Customization",
      label: "Custom Software Customization",
      value: customSoftwareCustomization.length,
      color: "hsl(242, 70%, 50%)",
    },
    {
      id: "IT Security Assesment",
      label: "IT Security Assessment",
      value: itSecurityAssessment.length,
      color: "hsl(178, 70%, 50%)",
    },
    {
      id: "Graphic Design Services",
      label: "Graphic Design Services",
      value: graphicDesignServices.length,
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "Website Creation for Personal Brands",
      label: "Website Creation for Personal Brands",
      value: websiteCreationForPersonalBrands.length,
      color: "hsl(56, 70%, 50%)",
    },
    {
      id: "Digital Presence Optimization",
      label: "Digital Presence Optimization",
      value: digitalPresenceOptimization.length,
      color: "hsl(56, 70%, 50%)",
    },
  ];

  return (
    <div className="flex w-screen flex-col md:flex-row">
      <Sidebar />
      <div className="flex justify-center flex-col items-center flex-grow md:ml-[200px] p-6">
        {/* <div className="flex-6 md:ml-[200px]"> */}
        {/* <Navbar /> */}
        {/* <div className="h-[500px] w-full">
          <PieChart data={data} />
        </div> */}

        {/* <BasicTable data={generatedOrders} /> */}
        <Box
          sx={{
            height: "600",
            width: {
              xs: "100%",
              sm: "100%",
              md: "600px",
              lg: "900px",
              xl: "100%",
            },
            padding: "16px",

            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Link to="/add-transaction">
            <button className="text-white text-base font-normal bg-green-600 hover:bg-green-500 p-[5px] rounded-md cursor-pointer mb-3">
              Add Transaction
            </button>
          </Link>

          <DataGrid
            className="datagrid"
            rows={transactions}
            columns={transactionsColumns}
            //   pageSize={1}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            pageSizeOptions={[5, 10]}
            //   rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </Box>
      </div>
    </div>
  );
}

export default Transactions;

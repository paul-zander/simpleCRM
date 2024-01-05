import Sidebar from "../components/Sidebar";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { transactionsColumns } from "../datatablesource";
import { Link } from "react-router-dom";

// firebase imports
import { getDocs, collection } from "firebase/firestore";
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

  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter />
      </Box>
    );
  }

  return (
    <div className="flex w-screen flex-col md:flex-row">
      <Sidebar />
      <div className="flex justify-center flex-col items-center flex-grow md:ml-[200px] p-6">
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
            "& .datagrid": {
              fontFamily: "Poppins",
              fontSize: "13px",
            },
            padding: "16px",
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
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: QuickSearchToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      </div>
    </div>
  );
}

export default Transactions;

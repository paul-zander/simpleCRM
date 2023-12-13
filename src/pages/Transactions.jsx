import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import BasicTable from "../components/BasicTable";
import { generatedOrders } from "../data/transactions";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { transactionsColumns } from "../datatablesource";

function Transactions() {
  console.log(generatedOrders);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        {/* <BasicTable data={generatedOrders} /> */}
        <Box sx={{ height: "600", width: "100%" }}>
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
        </Box>
      </div>
    </div>
  );
}

export default Transactions;

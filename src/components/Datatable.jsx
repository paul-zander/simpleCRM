import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../datatablesource.jsx";
import { Link } from "react-router-dom";

function Datatable() {
  const [data, setData] = useState(userRows);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-[15px]">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="py-[2px] px-[5px] rounded-sm text-blue-900 border border-dotted border-blue-900 cursor-pointer">
                View
              </div>
            </Link>
            <div
              className="py-[2px] px-[5px] rounded-sm text-red-900 border border-dotted border-red-900 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[600px] p-[20px]">
      <div className="w-full text-sm text-gray-600 font-bold mb-[10px] flex items-center justify-between">
        ADD NEW USER
        <Link
          to="/users/new"
          className="text-green-500 text-base font-normal border border-green-500 p-[5px] rounded-md cursor-pointer"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;

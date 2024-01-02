import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows, userColumns } from "../datatablesource.jsx";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.jsx";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

function Datatable({ columns, category }) {
  const [data, setData] = useState([]);
  const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);
  const [deleteModalId, setDeleteModalId] = useState(null);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, `${category}`));
      setData(querySnapshot.docs.map((doc) => doc.data()));
    }
    getData();
  }, [category]);

  async function handleDelete() {
    if (deleteModalId) {
      await deleteDoc(doc(db, "users", deleteModalId));
      setData(data.filter((item) => item.id !== deleteModalId));
      toggleDeleteModal(null); // Schließe das Modal nach dem Löschen und setze deleteModalId zurück
    }
  }

  function toggleDeleteModal(id) {
    setDeleteModalId(id);
    setDeleteModalIsVisible(!deleteModalIsVisible);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-[15px]">
            {/* view btn */}
            <Link
              to={`/${category}/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="py-[2px] px-[5px] rounded-sm text-blue-900 border border-dotted hover:border-solid border-blue-900 cursor-pointer">
                View
              </div>
            </Link>
            {/* edit btn */}
            <Link to={`/${category}/edit/${params.id}`}>
              <div className="py-[2px] px-[5px] rounded-sm text-green-900 border border-dotted hover:border-solid border-green-900 cursor-pointer">
                Edit
              </div>
            </Link>
            {/* delete btn */}
            <div
              className="py-[2px] px-[5px] rounded-sm text-red-900 border border-dotted hover:border-solid border-red-900 cursor-pointer"
              // onClick={() => handleDelete(params.row.id)}
              onClick={() => toggleDeleteModal(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-full p-[20px] flex flex-col items-center justify-center relative">
      {/* Overlay */}
      {deleteModalIsVisible && (
        <div
          className="absolute w-full h-full bg-white/75 z-40"
          onClick={() => toggleDeleteModal(null)}
        ></div>
      )}
      {/* Delete modal */}
      {deleteModalIsVisible && (
        <div className="absolute flex flex-col items-center justify-center gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 z-50 bg-white shadow-3xl rounded-sm max-w-md">
          <CloseIcon
            className="absolute right-3 top-3 cursor-pointer text-gray-500 rounded-full hover:text-gray-300"
            onClick={() => toggleDeleteModal(null)}
          />
          <p className="text-2xl bg-[#fce4e3] rounded-full p-2">❗</p>
          <h3 className="text-center">
            Are you sure you want to delete this user?
          </h3>
          <p className="text-center">
            This will delete this user permanently. You cannot undo this action.
          </p>
          <div className="flex gap-4">
            <button
              className="border-gray-400 hover:border-gray-700 border rounded-sm p-3 transition-all"
              onClick={() => toggleDeleteModal(null)}
            >
              Cancel
            </button>
            <button
              className="rounded-sm bg-[#F8312F] hover:bg-[#fc5a58] p-3 text-white transition-all"
              onClick={handleDelete}
            >
              Yes, Delete!
            </button>
          </div>
        </div>
      )}
      <div className="text-sm text-gray-600 font-bold mb-6 flex items-center gap-5">
        <Link
          to={`/${category}/new`}
          className="text-white text-base font-normal bg-green-600 hover:bg-green-500  p-[5px] rounded-md cursor-pointer"
        >
          Add New {category === "users" ? "User" : "Product"}
        </Link>
      </div>
      <Box
        sx={{
          height: "600",
          width: {
            xs: "100%",
            sm: "100%",
            md: "650px",
            lg: "900px",
            xl: "100%",
          },
          // padding: "16px",
        }}
      >
        <DataGrid
          className="datagrid"
          rows={data}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          // checkboxSelection
        />
      </Box>
    </div>
  );
}

export default Datatable;

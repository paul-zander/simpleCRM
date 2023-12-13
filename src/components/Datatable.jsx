import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows, userColumns } from "../datatablesource.jsx";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.jsx";

function Datatable({ columns, category }) {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const querySnapshot = await getDocs(collection(db, `${category}`));
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //       const data = doc.data();
  //       setData((prev) => [...prev, data]);
  //     });
  //   }
  //   getData();
  // }, [category]);

  console.log(data);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, `${category}`));
      setData(querySnapshot.docs.map((doc) => doc.data()));
    }
    getData();
  }, [category]);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  console.log(data);

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
              <div className="py-[2px] px-[5px] rounded-sm text-blue-900 border border-dotted border-blue-900 cursor-pointer">
                View
              </div>
            </Link>
            {/* edit btn */}
            <Link to={`/${category}/edit/${params.id}`}>
              <div className="py-[2px] px-[5px] rounded-sm text-green-900 border border-dotted border-green-900 cursor-pointer">
                Edit
              </div>
            </Link>
            {/* delete btn */}
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
      <div className="w-full text-sm text-gray-600 font-bold mb-6 flex items-center gap-5">
        {`ADD NEW ${category === "users" ? "USER" : "PRODUCT"}`}
        <Link
          to={`/${category}/new`}
          className="text-white text-base font-normal bg-green-600 hover:bg-green-500  p-[5px] rounded-md cursor-pointer"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
}

export default Datatable;

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PendingIcon from "@mui/icons-material/Pending";

function getStatusColorClasses(status) {
  let textColorClass = "";
  let bgColorClass = "";

  if (status === "pending") {
    textColorClass = "text-yellow-600";
    bgColorClass = "bg-yellow-100";
  } else if (status === "active") {
    textColorClass = "text-green-600";
    bgColorClass = "bg-green-100";
  } else if (status === "passive") {
    textColorClass = "text-red-600";
    bgColorClass = "bg-red-100";
  } else {
    textColorClass = "text-gray-600";
    bgColorClass = "bg-gray-100";
  }

  return `${textColorClass} ${bgColorClass}`;
}

export const userColumns = [
  { field: "id", headerName: "ID", width: 100, sortable: false },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full object-cover mr-[20px]"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "username", headerName: "Username", width: 150 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "adress",
    headerName: "Adress",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 150, sortable: false },
  {
    field: "product",
    headerName: "Product",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full object-cover mr-[20px]"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
  {
    field: "price",
    headerName: "Price in €",
    width: 100,
    type: "number",
  },
];

export const transactionsColumns = [
  {
    field: "id",
    headerName: "Transaction ID",
    width: 150,
    sortable: false,
  },
  {
    field: "product",
    headerName: "Product",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price [EUR]",
    width: 120,
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 200,
  },
  {
    field: "customerID",
    headerName: "Customer ID",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "method",
    headerName: "Payment Method",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div
          className={`flex items-center justify-center p-1 ${
            params.row.status === "Approved"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {params.row.status === "Approved" && (
            <CheckBoxIcon sx={{ fontSize: 15 }} />
          )}
          {params.row.status === "Pending" && (
            <PendingIcon sx={{ fontSize: 15 }} />
          )}
          <span className="ml-1">{params.row.status}</span>
        </div>
      );
    },
  },
];

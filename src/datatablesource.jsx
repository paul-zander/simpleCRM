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
  { field: "id", headerName: "ID", width: 100 },
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
          {params.row.username}
        </div>
      );
    },
  },
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
  { field: "id", headerName: "Tracking ID", width: 150 },
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
  },
];

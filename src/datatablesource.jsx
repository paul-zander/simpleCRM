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
  { field: "id", headerName: "ID", width: 70 },
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
    width: 200,
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
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "stock",
    headerName: "In Stock",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

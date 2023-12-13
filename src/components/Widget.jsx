import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Widget({ type }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllData() {
      // Fetch user data
      const userSnapshot = await getDocs(collection(db, "users"));
      const userData = userSnapshot.docs.map((doc) => doc.data());

      // Fetch product data
      const productSnapshot = await getDocs(collection(db, "products"));
      const productData = productSnapshot.docs.map((doc) => doc.data());

      // Combine user and product data
      setUsers(userData);
      setProducts(productData);
    }

    getAllData();
  }, []);

  let data;

  console.log(users);

  // temporary
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: users.length,
        isMoney: false,
        link: "See all users",
        linkPath: "/users",
        toolTipText: "Compared to last month",
        icon: (
          <PersonOutlinedIcon
            className="p-[5px] rounded-sm self-end"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "transactions":
      data = {
        title: "TRANSACTIONS",
        isMoney: false,
        link: "View all transactions",
        linkPath: "/transactions",
        toolTipText: "Compared to last month",
        icon: (
          <ShoppingCartOutlinedIcon
            className="p-[5px] rounded-sm self-end"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        amount: products.length,
        isMoney: false,
        link: "View all products",
        linkPath: "/products",
        toolTipText: "Compared to last month",
        icon: (
          <Inventory2OutlinedIcon
            className="p-[5px] rounded-sm self-end"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="p-[5px] rounded-sm self-end"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-1 justify-between p-2.5 shadow-3xl rounded-md h-[100px]">
      {/* left side */}
      <div className="flex flex-col justify-between">
        <span className="font-bold text-sm text-gray-600">{data.title}</span>
        <span className="text-3xl font-light">
          {data?.amount} {data.isMoney && "€"}
        </span>
        <Link to={data.linkPath}>
          <span className="text-sm border-b">{data.link}</span>
        </Link>
      </div>
      {/* right side */}
      <div className="flex flex-col justify-between">
        {/* NEED TO ADD: positive ? font color green : font color red */}
        <div
          className="flex items-center text-sm text-green-500"
          title={data.toolTipText}
        >
          <KeyboardArrowUpOutlinedIcon />
          {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;

import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

// import { revenuePercentage } from "../data/transactions";
// import { transactionsPercentage } from "../data/transactions";
// import { totalCurrentMonth } from "../data/transactions";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Widget({
  type,
  transactionsPercentage,
  totalCurrentMonth,
  revenuePercentage,
}) {
  const [users, setUsers] = useState([]);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllData() {
      // Fetch user data
      const userSnapshot = await getDocs(collection(db, "users"));
      const userData = userSnapshot.docs.map((doc) => doc.data());

      // Fetch product data
      // const productSnapshot = await getDocs(collection(db, "products"));
      // const productData = productSnapshot.docs.map((doc) => doc.data());

      // Combine user and product data
      setUsers(userData);
      // setProducts(productData);
    }

    getAllData();
  }, []);

  // console.log(users[0].timeStamp.toDate());

  function getAllUserDates() {
    const userCreationDates = users
      .filter((user) => user.timeStamp) // Filter out users without timeStamp
      .map((user) => user.timeStamp.toDate());
    return userCreationDates;
  }

  function getUserCreationForSpecificMonth(month) {
    return getAllUserDates().filter((date) => date.getMonth() === month);
  }

  const currentMonth = new Date().getMonth();
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  const userCreationsCurrentMonth =
    getUserCreationForSpecificMonth(currentMonth);
  const userCreationsPreviousMonth =
    getUserCreationForSpecificMonth(previousMonth);

  console.log(userCreationsCurrentMonth, userCreationsPreviousMonth);

  let userPercentage = (
    ((userCreationsCurrentMonth.length - userCreationsPreviousMonth.length) /
      userCreationsPreviousMonth.length) *
    100
  ).toFixed(0);

  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: users.length,
        isMoney: false,
        link: "See all users",
        linkPath: "/users",
        toolTipText: "Compared to last month",
        percentage: userPercentage,
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
        percentage: transactionsPercentage,
        icon: (
          <CreditCardOutlinedIcon
            className="p-[5px] rounded-sm self-end"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    // case "products":
    //   data = {
    //     title: "PRODUCTS",
    //     amount: products.length,
    //     isMoney: false,
    //     link: "View all products",
    //     linkPath: "/products",
    //     toolTipText: "Compared to last month",
    //     icon: (
    //       <Inventory2OutlinedIcon
    //         className="p-[5px] rounded-sm self-end"
    //         style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
    //       />
    //     ),
    //   };
    //   break;
    case "revenue":
      data = {
        title: "REVENUE (CURRENT MONTH)",
        amount: totalCurrentMonth,
        isMoney: true,
        // link: "See details",
        toolTipText: "Compared to last month",
        percentage: revenuePercentage,
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
    <div className="flex flex-1 justify-between p-4 shadow-3xl rounded-md h-[120px]">
      {/* left side */}
      <div className="flex flex-col justify-between">
        <span className="font-bold text-sm text-gray-600">{data.title}</span>
        <span className="text-3xl font-light">
          {data?.amount} {data.isMoney && "€"}
        </span>
        {data.linkPath && (
          <Link to={data.linkPath}>
            <span className="text-sm border-b">{data.link}</span>
          </Link>
        )}
      </div>
      {/* right side */}
      <div className="flex flex-col justify-between gap-5">
        {/* NEED TO ADD: positive ? font color green : font color red */}
        <div
          className={`flex items-center text-sm ${
            data.percentage > 0 ? "text-green-500" : "text-red-500"
          }`}
          title={data.toolTipText}
        >
          {data.percentage < 0 ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
          {data?.percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;

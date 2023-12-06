import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({ type }) {
  let data;

  // temporary
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
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
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
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
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
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
          {amount} {data.isMoney && "€"}
        </span>
        <span className="text-sm border-b">{data.link}</span>
      </div>
      {/* right side */}
      <div className="flex flex-col justify-between">
        {/* NEED TO ADD: positive ? font color green : font color red */}
        <div className="flex items-center text-sm text-green-500">
          <KeyboardArrowUpOutlinedIcon />
          {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;

// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CheckIcon from "@mui/icons-material/Check";
// import { generatedOrders } from "../data/transactions";

function Featured({ generatedOrders }) {
  const [targetRevenue, setTargetRevenue] = useState(50000);
  const inputValueRef = useRef("");

  const now = new Date();
  const previousMonth = new Date();
  previousMonth.setMonth(now.getMonth() - 1);
  const options = { month: "long" };
  const previousMonthFormatted = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(previousMonth);
  const ordersPreviousMonth = generatedOrders.filter((order) =>
    order.date.includes(previousMonthFormatted)
  );
  const currentMonth = new Intl.DateTimeFormat("en-US", options).format(now);
  const ordersCurrentMonth = generatedOrders.filter((order) =>
    order.date.includes(currentMonth)
  );
  const totalPreviousMonth = ordersPreviousMonth.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  const totalCurrentMonth = ordersCurrentMonth.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  // const targetRevenue = 20000;
  const percentage = (totalCurrentMonth / targetRevenue) * 100;

  function handleTargetInput(e) {
    e.preventDefault();
    let value = inputValueRef.current.value;
    value === "" ? setTargetRevenue(30000) : setTargetRevenue(value);
    inputValueRef.current.value = "";
  }

  return (
    <div className="flex-2 flex flex-col justify-center items-center shadow-3xl p-4 relative">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-sm uppercase text-gray-600 absolute left-2 top-2">
          Total Revenue
        </h2>
        {/* <MoreVertOutlinedIcon /> */}
      </div>
      <div className="p-[20px] flex flex-col items-center justify-center gap-7">
        <div style={{ width: 100, height: 100 }}>
          {/* <ProgressProvider /> */}
          <CircularProgressbar
            value={percentage.toFixed(0)}
            text={`${percentage.toFixed(0)}%`}
            strokeWidth={7}
          />
          {/* <ProgressProvider /> */}
        </div>
        <p className="font-semibold text-gray-600 text-center">
          Total sales made this month
        </p>
        <p className="text-3xl">{totalCurrentMonth} €</p>
        <p className="text-center text-sm text-gray-400">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-around">
          <div className="flex flex-col justify-center items-center">
            <div className="text-sm">
              <form onSubmit={handleTargetInput}>
                <div className="flex justify-between items-center gap-2 border-2 p-1 w-48">
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter Target..."
                    className="p-1 w-full focus:outline-none focus:border-sky-200"
                    ref={inputValueRef}
                  />
                  <button
                    className="bg-gray-100 hover:bg-sky-200 w-8 h-6 cursor-pointer rounded-md flex justify-center items-center"
                    // onClick={handleTargetInput}
                  >
                    <CheckIcon fontSize={"small"} />
                  </button>
                </div>
              </form>
            </div>
            {/* negative ? color red : green */}
            <div className="flex items-center mt-[10px] text-sm ">
              <div className="resultAmount">
                Target: &nbsp;&nbsp; {targetRevenue} €
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm">Last Month</div>
            <div
              className={`flex items-center mt-[10px] text-sm ${
                totalPreviousMonth <= targetRevenue
                  ? "text-red-500"
                  : "text-green-500"
              } `}
            >
              {totalPreviousMonth <= targetRevenue ? (
                <KeyboardArrowDownOutlinedIcon fontSize="small" />
              ) : (
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
              )}
              <div className="resultAmount">{totalPreviousMonth} €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

// import { generatedOrders } from "../data/transactions";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ aspect, title, generatedOrders, data }) {
  // check if data comes from user or product
  if (data && data.username) {
    generatedOrders = generatedOrders.filter(
      (order) => order.customerID === data.id
    );
  } else if (data && data.product) {
    generatedOrders = generatedOrders.filter(
      (order) => order.product === data.product
    );
  }
  console.log("data", data);

  // Month names array for output
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Create the current date
  const today = new Date();

  const currentMonthIndex = today.getMonth();
  console.log(currentMonthIndex);
  const oneMonthAgoIndex = (currentMonthIndex - 1 + 12) % 12;
  const twoMonthsAgoIndex = (currentMonthIndex - 2 + 12) % 12;
  const threeMonthsAgoIndex = (currentMonthIndex - 3 + 12) % 12;
  const fourMonthsAgoIndex = (currentMonthIndex - 4 + 12) % 12;
  const fiveMonthsAgoIndex = (currentMonthIndex - 5 + 12) % 12;
  const sixMonthsAgoIndex = (currentMonthIndex - 6 + 12) % 12;

  // Caculating total per month
  function calcTotal(month) {
    const filteredMonthlyTransactions = generatedOrders.filter(
      (transaction) => {
        const dateString = transaction.date;
        const dateObject = new Date(dateString);
        const monthAsNumber = (dateObject.getMonth() + 12) % 12; // Anpassung der Monatsberechnung
        return monthAsNumber === month;
      }
    );

    const generatedMoney = filteredMonthlyTransactions.map(
      (transaction) => transaction.price
    );

    const total = generatedMoney.reduce((acc, curr) => acc + +curr, 0);

    return total;
  }

  const chartData = [
    {
      name: monthNames[sixMonthsAgoIndex],
      Total: calcTotal(sixMonthsAgoIndex),
    },
    {
      name: monthNames[fiveMonthsAgoIndex],
      Total: calcTotal(fiveMonthsAgoIndex),
    },
    {
      name: monthNames[fourMonthsAgoIndex],
      Total: calcTotal(fourMonthsAgoIndex),
    },
    {
      name: monthNames[threeMonthsAgoIndex],
      Total: calcTotal(threeMonthsAgoIndex),
    },
    {
      name: monthNames[twoMonthsAgoIndex],
      Total: calcTotal(twoMonthsAgoIndex),
    },
    { name: monthNames[oneMonthAgoIndex], Total: calcTotal(oneMonthAgoIndex) },
    {
      name: monthNames[currentMonthIndex],
      Total: calcTotal(currentMonthIndex),
    },
  ];

  return (
    <div className="flex-4 shadow-3xl p-4 ">
      <div className="font-bold text-sm uppercase text-gray-600 mb-4">
        {title}
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#38B6FF"
            fill="#38B6FF"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

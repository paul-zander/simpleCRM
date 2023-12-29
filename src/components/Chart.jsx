import { generatedOrders } from "../data/transactions";

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

const currentMonth = monthNames[today.getMonth()];
const oneMonthAgo = monthNames[today.getMonth() - 1];
const twoMonthsAgo = monthNames[today.getMonth() - 2];
const threeMonthsAgo = monthNames[today.getMonth() - 3];
const fourMonthsAgo = monthNames[today.getMonth() - 4];
const fiveMonthsAgo = monthNames[today.getMonth() - 5];
const sixMonthsAgo = monthNames[today.getMonth() - 6];

// Caculating total

function calcTotal(month) {
  const filteredMonthlyTransactions = generatedOrders.filter((transaction) => {
    const dateString = transaction.date;
    const dateObject = new Date(dateString);
    const monthAsNumber = dateObject.getMonth() + 1;
    return monthAsNumber === month;
  });

  const generatedMoney = filteredMonthlyTransactions.map(
    (transaction) => transaction.price
  );

  const total = generatedMoney.reduce((acc, curr) => acc + curr, 0);

  return total;
}

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: sixMonthsAgo, Total: calcTotal(6) },
  { name: fiveMonthsAgo, Total: calcTotal(7) },
  { name: fourMonthsAgo, Total: calcTotal(8) },
  { name: threeMonthsAgo, Total: calcTotal(9) },
  { name: twoMonthsAgo, Total: calcTotal(10) },
  { name: oneMonthAgo, Total: calcTotal(11) },
  { name: currentMonth, Total: calcTotal(12) },
];

function Chart({ aspect, title }) {
  return (
    <div className="flex-4 shadow-3xl p-4 ">
      <div className="font-bold text-sm uppercase text-gray-600 mb-4">
        {title}
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
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
            stroke="#3e98c7"
            fill="#3e98c7"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

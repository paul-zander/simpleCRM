import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import BasicTable from "../components/BasicTable";
import { generatedOrders } from "../data/transactions";

function Home() {
  const ordersCopy = [...generatedOrders];

  const getDateValue = (dateString) => {
    const parts = dateString.split(" ");
    const month = [
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
    ].indexOf(parts[1]);
    const day = parseInt(parts[0]);
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  };

  const sortedOrders = ordersCopy.sort((a, b) => {
    const dateA = getDateValue(a.date);
    const dateB = getDateValue(b.date);
    return dateB - dateA;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        {/* <Navbar /> */}
        <div className="flex p-[20px] gap-[20px]">
          <Widget type="user" />
          {/* <Widget type="products" /> */}
          <Widget type="transactions" />
          <Widget type="revenue" />
        </div>
        <div className="flex px-[20px] py-[5px] gap-[20px]">
          <Featured />
          <Chart aspect={2 / 1} title={"REVENUE (LAST 6 MONTHS)"} />
        </div>
        <div className="shadow-3xl p-[20px] m-[20px]">
          <h2 className="font-bold text-sm uppercase text-gray-600 mb-3.5">
            Latest Transactions (60 Days)
          </h2>
          <BasicTable data={sortedOrders} />
        </div>
      </div>
    </div>
  );
}

export default Home;

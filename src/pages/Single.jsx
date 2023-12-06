import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Chart from "../components/Chart.jsx";
import BasicTable from "../components/BasicTable.jsx";

function SinglePage() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        {/* top */}
        <div className="flex p-[20px] gap-[20px]">
          {/* information card */}
          <div className="flex-1 shadow-3xl p-[20px] relative">
            <div className="absolute top-0 right-0 p-2 text-sm text-purple-600 bg-purple-100 cursor-pointer rounded-bl-md">
              Edit
            </div>
            <h2 className="mb-8 font-bold text-sm uppercase text-gray-400">
              Information
            </h2>
            <div className="flex gap-[20px]">
              <img
                className="w-[100px] h-[100px] rounded-full object-cover"
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <div>
                <h2 className="text-2xl mb-2">Jane Doe</h2>
                <div className="mb-[10px] text-gray-600 text-sm">
                  <span className="font-bold">Email: </span>
                  <span>janedoe@gmail.com</span>
                </div>
                <div className="mb-[10px] text-gray-600 text-sm">
                  <span className="font-bold">Phone: </span>
                  <span>014712525</span>
                </div>
                <div className="mb-[10px] text-gray-600 text-sm">
                  <span className="font-bold">Adress: </span>
                  <span>Max-Mustermann-Straße 5, 91241 Mustermannstadt</span>
                </div>{" "}
                <div className="mb-[10px] text-gray-600 text-sm">
                  <span className="font-bold">Country: </span>
                  <span>Germany</span>
                </div>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className="flex-2">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        {/* bottom */}
        <div className="p-[20px] shadow-3xl mx-[20px]">
          <h2 className="mb-8 font-bold text-sm uppercase text-gray-400">
            Last Transactions
          </h2>
          <BasicTable />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

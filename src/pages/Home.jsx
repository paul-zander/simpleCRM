import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import Table from "../components/table";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="flex p-[20px] gap-[20px]">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex px-[20px] py-[5px] gap-[20px]">
          <Featured />
          <Chart />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;

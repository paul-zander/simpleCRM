import Datatable from "../components/Datatable.jsx";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function List() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default List;

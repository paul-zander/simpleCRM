import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function BasicTable({ data }) {
  // const rows = [
  //   {
  //     id: 1143155,
  //     product: "Acer Nitro 5",
  //     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "John Smith",
  //     customerID: 112341,
  //     date: "1 March",
  //     method: "Cash on Delivery",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2235235,
  //     product: "Playstation 5",
  //     img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Michael Doe",
  //     customerID: 124124,
  //     date: "1 March",
  //     method: "Online Payment",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2342353,
  //     product: "Redragon S101",
  //     img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "John Smith",
  //     customerID: 212344,
  //     date: "1 March",
  //     method: "Cash on Delivery",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2357741,
  //     product: "Razer Blade 15",
  //     img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Jane Smith",
  //     customerID: 334757,
  //     date: "1 March",
  //     method: "Online",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2342355,
  //     product: "ASUS ROG Strix",
  //     img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Harold Carol",
  //     customerID: 534577,
  //     date: "1 March",
  //     method: "Online",
  //     status: "Pending",
  //   },
  // ];

  const rows = data;

  return (
    <div className="flex-2 p-[10px]">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price [EUR]</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Customer ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <img
                      src={row.img}
                      alt=""
                      className="h-8 w-8 rounded-full mr-2.5 object-cover"
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.customerID}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell>
                  {/* change color depending on status */}
                  <span
                    className={`p-1.5  ${
                      row.status === "Pending"
                        ? "text-yellow-600 bg-yellow-100"
                        : "text-green-600 bg-green-100"
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;

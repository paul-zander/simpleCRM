// import { generatedOrders } from "../data/transactions";
import { useState, useEffect } from "react";
import { doc, getDocs, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.jsx";
import SelectMenu from "../components/Select.jsx";
import { formatDate } from "../utils/formatDate.js";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Sidebar from "../components/Sidebar.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function NewTransaction() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    customer: "",
    product: "",
    date: "",
    status: "",
    method: "",
  });

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(querySnapshot.docs.map((doc) => doc.data()));
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => doc.data()));
    }
    getData();
  }, []);

  const productData = [
    { name: "IT Security Assessment", price: 5000, id: createProductID() },
    {
      name: "IT Consulting for Freelancers",
      price: 1000,
      id: createProductID(),
    },
    {
      name: "Website Creation for Personal Brands",
      price: 1500,
      id: createProductID(),
    },
    {
      name: "Custom Software Customization",
      price: 1200,
      id: createProductID(),
    },
    {
      name: "Digital Presence Optimization",
      price: 600,
      id: createProductID(),
    },
    { name: "Graphic Design Services", price: 200, id: createProductID() },
  ];

  function createProductID() {
    const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    const randomNumberAsString = randomNumber.toString().slice(0, 7);
    return randomNumberAsString;
  }

  const statusOptions = [
    { name: "Approved", id: "Approved" },
    { name: "Pending", id: "Pending" },
  ];

  const paymentMethods = [
    { name: "PayPal", id: "PayPal" },
    { name: "Online Payment", id: "Online Payment" },
  ];

  useEffect(() => {
    const getCustomerID = () => {
      const customer = users.find((user) => user.name === formData.customer);

      if (customer) {
        setFormData((previousFormData) => ({
          ...previousFormData,
          customerID: customer.id,
        }));
      }
    };

    getCustomerID();
  }, [formData.customer, users]);

  useEffect(() => {
    const getPriceAndId = () => {
      const product = products.find(
        (product) => product.product === formData.product
      );

      if (product) {
        const newTransactionId = createProductID();
        setFormData((previousFormData) => ({
          ...previousFormData,
          price: product.price,
          id: newTransactionId,
        }));
      }
    };

    getPriceAndId();
  }, [formData.product, products]);

  async function uploadTransactionToFirebase(event) {
    event.preventDefault();
    await addDoc(collection(db, "transactions"), formData);
    toast.success("Tranaction uploaded");
    setFormData({
      customer: "",
      product: "",
      date: "",
      status: "",
      method: "",
    });
  }

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // const handleInputChange = (field, value) => {
  //   if (field === "date") {
  //     // Formatieren des ausgewählten Datums
  //     const formattedDate = formatDate(value);

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [field]: formattedDate,
  //     }));
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [field]: value,
  //     }));
  //   }
  // };

  return (
    <div className="flex w-full flex-col md:flex-row">
      <Toaster />
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-full h-full md:ml-[200px] mt-24">
        <div className="p-4 md:p-6 shadow-3xl relative">
          <Link
            to="/transactions"
            className="cursor-pointer absolute left-3 top-[30px]"
          >
            <ArrowBackIcon />
          </Link>
          <h2 className="text-4xl mb-6 text-center">Add new transaction</h2>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={uploadTransactionToFirebase}
          >
            <SelectMenu
              value={formData.customer}
              onChange={(event) =>
                handleInputChange("customer", event.target.value)
              }
              selectItems={users}
              label={"Customer"}
              inputlabel={"Customer"}
            />

            <SelectMenu
              value={formData.product}
              onChange={(event) =>
                handleInputChange("product", event.target.value)
              }
              selectItems={productData}
              label={"Product"}
              inputlabel={"Product"}
            />

            <SelectMenu
              value={formData.status}
              onChange={(event) =>
                handleInputChange("status", event.target.value)
              }
              selectItems={statusOptions}
              label={"Status"}
              inputlabel={"Status"}
            />

            <SelectMenu
              value={formData.method}
              onChange={(event) =>
                handleInputChange("method", event.target.value)
              }
              selectItems={paymentMethods}
              label={"Payment Method"}
              inputlabel={"Payment Method"}
            />
            <input
              className="p-[16px] xs:w-[250px] sm:w-[400px] border-[#C4C4C4] hover:border-black border focus:outline-[#1976D2] rounded-md m-[10px]"
              required
              type="date"
              id="start"
              name="trip-start"
              value={formData.date}
              min=""
              max=""
              onChange={(event) =>
                handleInputChange("date", event.target.value)
              }
            />

            <button className="w-[150px] p-[10px] border-none bg-[#1976D2] hover:bg-[#7db2e7] text-white text-bold cursor-pointer mt-[10px] ">
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTransaction;

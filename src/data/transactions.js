// const getRandomElement = (array) =>
//   array[Math.floor(Math.random() * array.length)];

// const generateRandomDate = (start, end) => {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// };

// const customerData = [
//   { customer: "Albert Dera", customerID: "48yY1nnAuVYbCS9wzoToXaAf8tO2" },
//   {
//     customer: "Stefanie Stefancik",
//     customerID: "5dZMwxn30dfjpaJFYQlsZh25n002",
//   },
//   { customer: "Aiony Haust", customerID: "GR7mgiMIZhb3OUo1Jf08hDeYLXF2" },
//   { customer: "Jake Nackos", customerID: "KnciTEg66LYDRoNzb7tf15XWPEx1" },
//   { customer: "Alexander Suprun", customerID: "Ntg9YzEtKxexkmXp9mP8ugp6HP73" },
//   { customer: "Diane Sommer", customerID: "TPY9GEONz9UKNJp6518rlFnvjkZ2" },
//   { customer: "Alexander Hipp", customerID: "YSypR19Q04Y6xGeF5nq8wApVA0D2" },
//   { customer: "Susanne Maier", customerID: "ZfMkwWAy74Q9HMWCttfP11dTzx72" },
//   { customer: "Alexander Winter", customerID: "c4Fp12ze59dSDBQf4P7u6zEL0tl1" },
//   { customer: "Michaela Damme", customerID: "zLaNMzarIxPAbm1xfm6Ug9yCWDI2" },
// ];

// const productData = [
//   { product: "IT Security Assessment", price: 5000 },
//   { product: "IT Consulting for Freelancers", price: 1000 },
//   { product: "Website Creation for Personal Brands", price: 1500 },
//   { product: "Custom Software Customization", price: 1200 },
//   { product: "Digital Presence Optimization", price: 600 },
//   { product: "Graphic Design Services", price: 200 },
// ];

// const paymentMethods = ["PayPal", "Online Payment"];

// // const statusOptions = ["Approved", "Pending"];

// const generateRandomOrder = () => {
//   const customer = getRandomElement(customerData);
//   const product = getRandomElement(productData);
//   const date = generateRandomDate(
//     new Date("2023-01-01"),
//     new Date("2023-12-31")
//   );
//   const method = getRandomElement(paymentMethods);
//   const status = date >= new Date("2023-11-01") ? "Pending" : "Approved";

//   return {
//     id: Math.floor(Math.random() * 10000000) + 1,
//     product: product.product,
//     img: product.img,
//     customer: customer.customer,
//     customerID: customer.customerID,
//     date: `${date.getDate()} ${date.toLocaleString("en-US", {
//       month: "long",
//     })} ${date.getFullYear()}`,
//     method: method,
//     status: status,
//     price: product.price,
//   };
// };

// export const generatedOrders = Array.from({ length: 30 }, generateRandomOrder);

// console.log(generatedOrders);

export const generatedOrders = [
  {
    id: 1234567,
    product: "IT Security Assessment",
    img: "https://example.com/image1.jpg",
    customer: "John Doe",
    customerID: "48yY1nnAuVYbCS9wzoToXaAf8tO2",
    date: "15 March 2023",
    method: "PayPal",
    status: "Approved",
    price: 5000,
  },
  {
    id: 9876543,
    product: "IT Consulting for Freelancers",
    img: "https://example.com/image2.jpg",
    customer: "Jane Smith",
    customerID: "5dZMwxn30dfjpaJFYQlsZh25n002",
    date: "22 April 2023",
    method: "Online Payment",
    status: "Pending",
    price: 1000,
  },
  {
    id: 6543210,
    product: "Website Creation for Personal Brands",
    img: "https://example.com/image3.jpg",
    customer: "Alice Johnson",
    customerID: "GR7mgiMIZhb3OUo1Jf08hDeYLXF2",
    date: "8 June 2023",
    method: "Online Payment",
    status: "Approved",
    price: 1500,
  },
  {
    id: 1122334,
    product: "Custom Software Customization",
    img: "https://example.com/image4.jpg",
    customer: "Bob Williams",
    customerID: "KnciTEg66LYDRoNzb7tf15XWPEx1",
    date: "15 September 2023",
    method: "Online Payment",
    status: "Pending",
    price: 1200,
  },
  {
    id: 5566778,
    product: "Digital Presence Optimization",
    img: "https://example.com/image5.jpg",
    customer: "Eva Davis",
    customerID: "Ntg9YzEtKxexkmXp9mP8ugp6HP73",
    date: "3 November 2023",
    method: "PayPal",
    status: "Approved",
    price: 600,
  },
  {
    id: 3344557,
    product: "Graphic Design Services",
    img: "https://example.com/image6.jpg",
    customer: "Alexander Suprun",
    customerID: "TPY9GEONz9UKNJp6518rlFnvjkZ2",
    date: "19 December 2023",
    method: "Online Payment",
    status: "Pending",
    price: 200,
  },
  {
    id: 7788390,
    product: "IT Security Assessment",
    img: "https://example.com/image7.jpg",
    customer: "Diane Sommer",
    customerID: "YSypR19Q04Y6xGeF5nq8wApVA0D2",
    date: "6 February 2023",
    method: "PayPal",
    status: "Pending",
    price: 5000,
  },
  {
    id: 1122111,
    product: "Graphic Design Services",
    img: "https://example.com/image8.jpg",
    customer: "Alexander Hipp",
    customerID: "ZfMkwWAy74Q9HMWCttfP11dTzx72",
    date: "14 March 2023",
    method: "Online Payment",
    status: "Approved",
    price: 200,
  },
  {
    id: 5544332,
    product: "Website Creation for Personal Brands",
    img: "https://example.com/image9.jpg",
    customer: "Susanne Maier",
    customerID: "c4Fp12ze59dSDBQf4P7u6zEL0tl1",
    date: "22 April 2023",
    method: "PayPal",
    status: "Pending",
    price: 1500,
  },
  {
    id: 3341556,
    product: "Custom Software Customization",
    img: "https://example.com/image10.jpg",
    customer: "Michaela Damme",
    customerID: "zLaNMzarIxPAbm1xfm6Ug9yCWDI2",
    date: "8 June 2023",
    method: "PayPal",
    status: "Approved",
    price: 1200,
  },
  {
    id: 7788390,
    product: "Digital Presence Optimization",
    img: "https://example.com/image11.jpg",
    customer: "Alexander Winter",
    customerID: "GR7mgiMIZhb3OUo1Jf08hDeYLXF2",
    date: "15 September 2023",
    method: "Online Payment",
    status: "Pending",
    price: 600,
  },
  {
    id: 1142111,
    product: "Website Creation for Personal Brands",
    img: "https://example.com/image12.jpg",
    customer: "Michaela Damme",
    customerID: "TPY9GEONz9UKNJp6518rlFnvjkZ2",
    date: "3 November 2023",
    method: "Online Payment",
    status: "Approved",
    price: 1500,
  },
  {
    id: 5546332,
    product: "Custom Software Customization",
    img: "https://example.com/image13.jpg",
    customer: "Jane Smith",
    customerID: "YSypR19Q04Y6xGeF5nq8wApVA0D2",
    date: "19 December 2023",
    method: "PayPal",
    status: "Pending",
    price: 1200,
  },
  {
    id: 3344256,
    product: "Graphic Design Services",
    img: "https://example.com/image14.jpg",
    customer: "Susanne Maier",
    customerID: "ZfMkwWAy74Q9HMWCttfP11dTzx72",
    date: "6 February 2023",
    method: "PayPal",
    status: "Pending",
    price: 200,
  },
  {
    id: 7688990,
    product: "IT Security Assessment",
    img: "https://example.com/image15.jpg",
    customer: "Alexander Hipp",
    customerID: "Ntg9YzEtKxexkmXp9mP8ugp6HP73",
    date: "14 March 2023",
    method: "PayPal",
    status: "Approved",
    price: 5000,
  },

  {
    id: 11221611,
    product: "IT Consulting for Freelancers",
    img: "https://example.com/image20.jpg",
    customer: "Alexander Hipp",
    customerID: "ZfMkwWAy74Q9HMWCttfP11dTzx72",
    date: "19 December 2023",
    method: "Online Payment",
    status: "Pending",
    price: 1000,
  },
  {
    id: 1122711,
    product: "IT Consulting for Freelancers",
    img: "https://example.com/image24.jpg",
    customer: "Susanne Maier",
    customerID: "JKL012",
    date: "8 June 2023",
    method: "Online Payment",
    status: "Approved",
    price: 500,
  },
  {
    id: 1544332,
    product: "Digital Presence Optimization",
    img: "https://example.com/image25.jpg",
    customer: "Alexander Winter",
    customerID: "c4Fp12ze59dSDBQf4P7u6zEL0tl1",
    date: "15 September 2023",
    method: "PayPal",
    status: "Pending",
    price: 600,
  },
  {
    id: 3354256,
    product: "Custom Software Customization",
    img: "https://example.com/image26.jpg",
    customer: "Michaela Damme",
    customerID: "zLaNMzarIxPAbm1xfm6Ug9yCWDI2",
    date: "3 November 2023",
    method: "PayPal",
    status: "Approved",
    price: 700,
  },
  {
    id: 7783990,
    product: "Graphic Design Services",
    img: "https://example.com/image27.jpg",
    customer: "Jane Smith",
    customerID: "TPY9GEONz9UKNJp6518rlFnvjkZ2",
    date: "19 December 2023",
    method: "Online Payment",
    status: "Pending",
    price: 800,
  },
  {
    id: 1122101,
    product: "Website Creation for Personal Brands",
    img: "https://example.com/image28.jpg",
    customer: "Alexander Hipp",
    customerID: "YSypR19Q04Y6xGeF5nq8wApVA0D2",
    date: "6 February 2023",
    method: "PayPal",
    status: "Pending",
    price: 1500,
  },
];

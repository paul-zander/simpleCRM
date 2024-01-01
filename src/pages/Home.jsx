import Chart from "../components/Chart";
import Featured from "../components/Featured";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.jsx";
import { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate.js";
// import {
//   currentMonth,
//   previousMonth,
//   calcNumTransactionsPercentage,
//   // filterTransactionsByMonth,
// } from "../data/transactions.js";

function Home() {
  const [generatedOrders, setGeneratedOrders] = useState([]);

  useEffect(() => {
    async function loadData() {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const formattedOrders = [];

      querySnapshot.forEach((doc) => {
        const formattedTransaction = {
          ...doc.data(),
          date: formatDate(doc.data().date),
          price: +doc.data().price,
        };
        formattedOrders.push(formattedTransaction);
      });

      setGeneratedOrders(formattedOrders);
    }

    loadData();
  }, []);

  // transactions calc

  // Aktuelles Datum erstellen
  const currentDate = new Date();

  // Monate als Array definieren
  const months = [
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

  // Aktuellen Monat auslesen
  const currentMonth = months[currentDate.getMonth()];

  // Vorherigen Monat berechnen
  const previousMonthIndex = (currentDate.getMonth() - 1 + 12) % 12; // Um sicherzustellen, dass der Index nicht negativ wird
  const previousMonth = months[previousMonthIndex];

  // Accepts a string of the month as param
  function filterTransactionsByMonth(month) {
    return generatedOrders.filter((transaction) =>
      transaction.date.includes(month)
    );
  }

  function getRevenues(monthlyTransactions) {
    return monthlyTransactions.map((transaction) => transaction.price);
  }

  function calcTotal(revenues) {
    return revenues.reduce((acc, curr) => acc + curr, 0);
  }

  function calcNumTransactionsPercentage(currentMonth, previousMonth) {
    const transactionsCurrentMonth = filterTransactionsByMonth(currentMonth);
    const transactionsPreviousMonth = filterTransactionsByMonth(previousMonth);
    return (
      ((transactionsCurrentMonth.length - transactionsPreviousMonth.length) /
        transactionsPreviousMonth.length) *
      100
    ).toFixed(0);
  }

  const transactionsPercentage = calcNumTransactionsPercentage(
    currentMonth,
    previousMonth
  );

  function calcRevenuePercentage(currentMonth, previousMonth) {
    const transactionsCurrentMonth = filterTransactionsByMonth(currentMonth);
    const transactionsPreviousMonth = filterTransactionsByMonth(previousMonth);
    const revenueCurrentMonth = getRevenues(transactionsCurrentMonth);
    const revenuePreviousMonth = getRevenues(transactionsPreviousMonth);
    const totalCurrentMonth = calcTotal(revenueCurrentMonth);
    const totalPreviousMonth = calcTotal(revenuePreviousMonth);

    return (
      ((totalCurrentMonth - totalPreviousMonth) / totalPreviousMonth) *
      100
    ).toFixed();
  }

  const revenuePercentage = calcRevenuePercentage(currentMonth, previousMonth);

  const transactionsCurrentMonth = filterTransactionsByMonth(currentMonth);

  const revenuesCurrentMonth = transactionsCurrentMonth.map(
    (transaction) => transaction.price
  );

  const totalCurrentMonth = revenuesCurrentMonth.reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-6 md:ml-[200px]">
        {/* <Navbar /> */}
        <div className="xs:flex-col md:flex-row flex p-[20px] gap-[20px]">
          <Widget type="user" />
          {/* <Widget type="products" /> */}
          <Widget
            type="transactions"
            transactionsPercentage={transactionsPercentage}
          />
          <Widget
            type="revenue"
            revenuePercentage={revenuePercentage}
            totalCurrentMonth={totalCurrentMonth}
          />
        </div>
        <div className="xs:flex-col lg:flex-row flex px-[20px] py-[5px] gap-[20px]">
          <Featured generatedOrders={generatedOrders} />
          <Chart
            aspect={2 / 1}
            title={"REVENUE (LAST 6 MONTHS)"}
            generatedOrders={generatedOrders}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

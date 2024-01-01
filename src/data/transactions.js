// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase.jsx";
// import { formatDate } from "../utils/formatDate.js";

// export let generatedOrders = [];

// const querySnapshot = await getDocs(collection(db, "transactions"));
// querySnapshot.forEach((doc) => {
//   const formatedTransaction = {
//     ...doc.data(),
//     date: formatDate(doc.data().date),
//     price: +doc.data().price,
//   };

//   generatedOrders.push(formatedTransaction);
// });

// // Aktuelles Datum erstellen
// const currentDate = new Date();

// // Monate als Array definieren
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Aktuellen Monat auslesen
// export const currentMonth = months[currentDate.getMonth()];

// // Vorherigen Monat berechnen
// const previousMonthIndex = (currentDate.getMonth() - 1 + 12) % 12; // Um sicherzustellen, dass der Index nicht negativ wird
// export const previousMonth = months[previousMonthIndex];

// // Ausgabe
// console.log("Aktueller Monat: " + currentMonth);
// console.log("Vorheriger Monat: " + previousMonth);

// // Accepts a string of the month as param
// export function filterTransactionsByMonth(month) {
//   return generatedOrders.filter((transaction) =>
//     transaction.date.includes(month)
//   );
// }

// function getRevenues(monthlyTransactions) {
//   return monthlyTransactions.map((transaction) => transaction.price);
// }

// function calcTotal(revenues) {
//   return revenues.reduce((acc, curr) => acc + curr, 0);
// }

// export function calcNumTransactionsPercentage(currentMonth, previousMonth) {
//   const transactionsCurrentMonth = filterTransactionsByMonth(currentMonth);
//   const transactionsPreviousMonth = filterTransactionsByMonth(previousMonth);
//   return (
//     ((transactionsCurrentMonth.length - transactionsPreviousMonth.length) /
//       transactionsPreviousMonth.length) *
//     100
//   ).toFixed(0);
// }

// const transactionsPercentage = calcNumTransactionsPercentage(
//   currentMonth,
//   previousMonth
// );

// console.log("Percentage", transactionsPercentage);

// function calcRevenuePercentage(currentMonth, previousMonth) {
//   const transactionsCurrentMonth = filterTransactionsByMonth(currentMonth);
//   const transactionsPreviousMonth = filterTransactionsByMonth(previousMonth);
//   const revenueCurrentMonth = getRevenues(transactionsCurrentMonth);
//   const revenuePreviousMonth = getRevenues(transactionsPreviousMonth);
//   const totalCurrentMonth = calcTotal(revenueCurrentMonth);
//   const totalPreviousMonth = calcTotal(revenuePreviousMonth);

//   return (
//     ((totalCurrentMonth - totalPreviousMonth) / totalPreviousMonth) *
//     100
//   ).toFixed();
// }

// export const revenuePercentage = calcRevenuePercentage(
//   currentMonth,
//   previousMonth
// );

// const transactionsCurrentMonth = filterTransactionsByMonth(currentMonth);

// const revenuesCurrentMonth = transactionsCurrentMonth.map(
//   (transaction) => transaction.price
// );

// export const totalCurrentMonth = revenuesCurrentMonth.reduce(
//   (acc, curr) => acc + curr,
//   0
// );

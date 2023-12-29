export function formatDate(dateString) {
  // Create a Date object from the passed date string
  const inputDate = new Date(dateString);

  // Month names array for display
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

  // Extract day, month, and year
  const day = inputDate.getDate();
  const monthIndex = inputDate.getMonth();
  const year = inputDate.getFullYear();

  // Convert the month index to the month name
  const monthName = monthNames[monthIndex];

  // Create the desired format: "13 August 2023"
  const formattedDate = day + " " + monthName + " " + year;

  // Return the formatted date
  return formattedDate;
}

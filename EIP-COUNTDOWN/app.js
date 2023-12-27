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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");  

let futureDate = new Date(2024, 10, 22, 21, 59, 59);

let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getSeconds();
let weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `English Immersion Program ends on ${weekday} ${month} ${date} ${year} at ${hours}:${minutes}:${seconds}`

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);
  
 // console.log(days, hours, minutes, seconds);
  
  items[0].innerHTML = days;
  items[1].innerHTML = hours;
  items[2].innerHTML = minutes;
  items[3].innerHTML = seconds;
}
getRemainingTime();
setInterval(getRemainingTime, 1000);
  

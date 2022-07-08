"use strict";
let jsonData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// This function returns the maximum amount in the list.
const getMaxAmount = function () {
  let max = 0;
  jsonData.map((ele) => {
    if (ele.amount > max) {
      console.log(ele);
      max = ele.amount;
    }
  });
  return max;
};

// Calculate multiplier
const calculateMultiplier = function () {
  //  26 rem is the height of the container for graph and we need to
  // scale the values down to fit the height of the graph so we
  // if 26rem = 100% of the height of the container
  //      Xrem = 1%
  // X = 26 / 100
  const maxValue = getMaxAmount();
  return maxValue / 260;
};

// Update the bars on the page
const updateBars = function () {
  const multiplier = calculateMultiplier();
  jsonData.forEach((data) => {
    const value = Math.trunc(0.26 * data.amount);
    console.log(value);
    document.querySelector(`.${data.day}--bar`).style.height = `${value}rem`;
  });
};

updateBars();

// jsonData.forEach((val) => {
//   const amount = `.${val.day}--bar`;
//   console.log(amount);
//   document.querySelector(amount).style.height = "1.2rem";
// });

jsonData.forEach((data) => {
  let day = document.querySelector(`.${data.day}`);
  let hover = document.querySelector(`.${data.day}-hover-amount`);
  hover.innerHTML = `\$${data.amount}`;
  day.addEventListener("mouseover", function () {
    console.log(`${data.day} mouse hover`);
    hover.style.opacity = 100;
  });

  day.addEventListener("mouseleave", function () {
    console.log("${data.day} leave hover");
    hover.style.opacity = 0;
  });
});

// HIghlight the current day's color
// extract the current day's first 3 letters and make them lower case
const date = Date().toString();
const concatDay = date.substring(0, 3).toLowerCase();
document.querySelector(`.${concatDay}--bar`).style.backgroundColor =
  "hsl(186, 34%, 60%)";

// let wed = document.querySelector(".wed");
// let wedHover = document.querySelector(".wed-hover-amount");
// wed.addEventListener("mouseover", function () {
//   console.log("wed mouse hover");
//   wedHover.style.opacity = 100;
// });

// wed.addEventListener("mouseleave", function () {
//   console.log("wed leave hover");
//   wedHover.style.opacity = 0;
// });

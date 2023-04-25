/********* create variables *********/
// useful variables might be: the cost per day, the number of daysList selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
var isMonClicked = 0;
var isTueClicked = 0;
var isWedClicked = 0;
var isThuClicked = 0;
var isFriClicked = 0;
var halfClicked = 0;
var fullClicked = 0;
var fullPrice = 35;
var halfPrice = 20;
var price = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.getElementById("monday").addEventListener("click", function () {
  if (isMonClicked == 0) {
    isMonClicked = 1;
    changeStyle("monday");
  } else {
    isMonClicked = 0;
    resetStyle("monday");
  }
  calculateCost();
});

document.getElementById("tuesday").addEventListener("click", function () {
  if (isTueClicked == 0) {
    isTueClicked = 1;
    changeStyle("tuesday");
  } else {
    isTueClicked = 0;
    resetStyle("tuesday");
  }
  calculateCost();
});
document.getElementById("wednesday").addEventListener("click", function () {
  if (isWedClicked == 0) {
    isWedClicked = 1;
    changeStyle("wednesday");
  } else {
    isWedClicked = 0;
    resetStyle("wednesday");
  }
  calculateCost();
});

document.getElementById("thursday").addEventListener("click", function () {
  if (isThuClicked == 0) {
    isThuClicked = 1;
    changeStyle("thursday");
  } else {
    isThuClicked = 0;
    resetStyle("thursday");
  }
  calculateCost();
});
document.getElementById("friday").addEventListener("click", function () {
  if (isFriClicked == 0) {
    isFriClicked = 1;
    changeStyle("friday");
  } else {
    isFriClicked = 0;
    resetStyle("friday");
  }
  calculateCost();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll() {
  resetStyle("monday");
  resetStyle("tuesday");
  resetStyle("wednesday");
  resetStyle("thursday");
  resetStyle("friday");
  resetStyle("full");
  resetStyle("half");
  isMonClicked = 0;
  isTueClicked = 0;
  isWedClicked = 0;
  isThuClicked = 0;
  isFriClicked = 0;
  halfClicked = 0;
  fullClicked = 0;
  document.getElementById("calculated-cost").innerHTML = 0;
}

document.getElementById("clear-button").addEventListener("click", clearAll);

function resetStyle(id) {
  document.getElementById(id).style.backgroundColor = "#fff";
  document.getElementById(id).style.color = "black";
  document.getElementById(id).style.textDecoration = "none";
}
function changeStyle(id) {
  document.getElementById(id).style.backgroundColor = "#E5AF42";
  document.getElementById(id).style.color = "black";
  document.getElementById(id).style.textDecoration = "none";
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

document.getElementById("half").addEventListener("click", function () {
  if (halfClicked == 0) {
    halfClicked = 1;
    if (fullClicked == 1) {
      resetStyle("full");
      fullClicked = 0;
    }
    changeStyle("half");
    price = halfPrice;
    calculateCost();
  } else {
    resetStyle("half");
    halfClicked = 0;
    document.getElementById("calculated-cost").innerHTML = 0;
  }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

document.getElementById("full").addEventListener("click", function () {
  if (fullClicked == 0) {
    fullClicked = 1;
    if (halfClicked == 1) {
      resetStyle("half");
      halfClicked = 0;
    }
    changeStyle("full");
    price = fullPrice;
    calculateCost();
  } else {
    resetStyle("full");
    fullClicked = 0;
    document.getElementById("calculated-cost").innerHTML = 0;
  }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
  if (fullClicked == 1 || halfClicked == 1) {
    var totalBill =
      (isMonClicked +
        isTueClicked +
        isWedClicked +
        isThuClicked +
        isFriClicked) *
      price;
    document.getElementById("calculated-cost").innerHTML = totalBill;
  }
}

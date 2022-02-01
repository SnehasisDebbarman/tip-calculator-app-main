var billAmount, personCount, tipAmount;

// function displayPersonError(event) {
//   event.preventDefault();
//   var per = document.getElementById("person-count").value;
//   if (per === 0) {
//     document.getElementById("error-person").style.display = "none";
//   } else {
//     document.getElementById("error-person").style.display = "inline-block";
//   }
// }
document.getElementById("perhead").innerText = "$" + 0;
document.getElementById("total").innerText = "$" + 0;

function bill() {
  billAmount = document.getElementById("bill-amount").value;
  //console.log(billAmount);
  if (billAmount === undefined) {
    return 0;
  }
  return billAmount;
}

function person() {
  var per = document.getElementById("person-count").value;

  //   document.getElementById("person-count").value === 0
  //     ? (document.getElementByClass("error-person").style.display =
  //         "inline-block")
  //     : (document.getElementByClass("error-person").style.display =
  //         "inline-block");

  personCount = document.getElementById("person-count").value;

  console.log(per);
  if (personCount === undefined) {
    return 0;
  }
  return personCount;
}

function tip() {
  tipAmount = document.getElementById("custom-tip").value;
  if (tipAmount === undefined) {
    return 0;
  }
  return tipAmount;
}

function calculate() {
  let x = bill();
  let y = person();
  let z = tip();
  let a;

  a = ((x * (1 + z / 100)) / y).toFixed(2);

  let b = (x * (z / 100)).toFixed(2);

  document.getElementById("perhead").innerText = "$" + b;
  document.getElementById("total").innerText = "$" + a;
  console.log(a);
}
function tipValue(i) {
  document.getElementById("custom-tip").value = i;
  calculate();
}
function reset() {
  document.getElementById("custom-tip").value = 0;
  document.getElementById("person-count").value = 0;

  document.getElementById("perhead").innerText = "$" + 0;
  document.getElementById("total").innerText = "$" + 0;
  document.getElementById("bill-amount").value = 0;
}

var error = document.getElementById("error");
var input = document.getElementById("person-count");
var inputGroup = document.getElementById("ig");

inputGroup.style.boxShadow = "0 0 0 3px hsl(172, 67%, 45%)";
input.addEventListener("input", (e) => {
  const value = +e.target.value;

  if (value === 0) {
    error.textContent = "Can't be Zero";
    input.style.color = "red";
    inputGroup.style.boxShadow = "0 0 0 3px red";
  } else {
    error.textContent = "";
    input.style.color = "black";
    inputGroup.style.boxShadow = "0 0 0 3px hsl(172, 67%, 45%)";
  }
});
function start() {
  var inputGroup = document.getElementById("ig");

  inputGroup.style.boxShadow = "0 0 0 3px red";
}
start();

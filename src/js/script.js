const selector = (selector) => (document.querySelector(selector));
const bill = selector("#bill");
const numOfPerson = selector("#numOfPerson");
const tipAmount =selector("#tip_amount");
const totalAmount =selector("#total_amount");
const btnTip = document.querySelectorAll(".btn--tip");
const errMsgBill = selector(".err__msg--bill");
const errMsgPerson = selector(".err__msg--person");
const resetBtn = selector("#btn-reset");

const inputValidation = (billAmount, person) => {
  let validate;
  if (!billAmount || billAmount === 0) {
    errMsgBill.textContent = "Can't be zero";
    bill.classList.add("app__input--err");
    bill.focus();
    validate = false;
  } else if (!person || person === 0) {
    errMsgPerson.textContent = "Can't be zero";
    numOfPerson.classList.add("app__input--err");
    numOfPerson.focus();
    validate = false;
  } else {
    errMsgBill.textContent = "";
    errMsgPerson.textContent = "";
    bill.classList.remove("app__input--err");
    numOfPerson.classList.remove("app__input--err");
    validate = true;
  }
  return validate;
}

const calculateTip = (billAmount, percent, person) => {
  let tip = billAmount * percent;
  let tipValue = tip / person;
  let formattedTip = tipValue.toFixed(2);
  let total = (billAmount + tip) / person;
  let formattedTotal = total.toFixed(2);
  tipAmount.textContent = "$" + formattedTip;
  totalAmount.textContent = "$" + formattedTotal;
}

const handleClick = (e) => {
  const billAmount = Number(bill.value);
  const person = Number(numOfPerson.value);
  const target = e.target;
  let percent = Number(target.textContent.replace(/%/g, "")) / 100;
  btnTip.forEach(btn => {
    btn.classList.remove("btn--tip--active");
  });
  target.classList.add("btn--tip--active");

  if (inputValidation(billAmount, person)) {
    calculateTip(billAmount, percent, person);
    resetBtn.classList.remove("btn--disable");
  }
}

btnTip.forEach(btn => {
  btn.addEventListener("click", handleClick);
});
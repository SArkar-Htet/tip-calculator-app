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
  customTip.value = "";
  btnTip.forEach(btn => {
    btn.classList.remove("btn--tip--active");
  });
  target.classList.add("btn--tip--active");

  if (tipValidation(billAmount, person)) {
    calculateTip(billAmount, percent, person);
    resetBtn.classList.remove("btn--disable");
  }
}

const handleInput = (e) => {
  onlyNumber(e);
  let target = e.target;
  let name = target.name;
  let value = Number(target.value);
  let billAmount = name === "bill" ? value : Number(bill.value);
  let person = name === "numOfPerson" ? value : Number(numOfPerson.value);
  let otherVal = name === "bill" ? person : billAmount;
  let errMsg = name === "bill" ? errMsgBill : errMsgPerson;
  let errInput = name === "bill" ? bill : numOfPerson;
  let percent;

  btnTip.forEach(btn => {
    if (btn.classList.contains("btn--tip--active")) {
      percent = Number(btn.textContent.replace(/%/g, "")) / 100;
    }
  });

  if (!percent) {
    percent = Number(customTip.value) / 100;
  }
  
  if (value && value !== 0) {
    errMsg.innerHTML = "";
    errInput.classList.remove("app__input--err");
    if (otherVal > 0 && percent) {
      calculateTip(billAmount, percent, person);
      resetBtn.classList.remove("btn--disable");
    }
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
}
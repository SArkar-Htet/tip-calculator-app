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
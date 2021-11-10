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
  if (inputValidation(e)) {
    let target = e.target;
    let name = target.name;
    let value = Number(target.value);
    let billAmount = name === "bill" ? value : Number(bill.value);
    let person = name === "numOfPerson" ? value : Number(numOfPerson.value);
    let percent;
  
    btnTip.forEach(btn => {
      if (btn.classList.contains("btn--tip--active")) {
        percent = Number(btn.textContent.replace(/%/g, "")) / 100;
      }
    });
  
    if (!percent) {
      percent = Number(customTip.value) / 100;
    }

    calculateTip(billAmount, percent, person);
    resetBtn.classList.remove("btn--disable");
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
}

const handleCustomTip = (e) => {
  onlyNumber(e);

  const percent = Number(e.target.value) / 100;
  let billAmount = Number(bill.value);
  let person = Number(numOfPerson.value);
  btnTip.forEach(btn => {
    btn.classList.remove("btn--tip--active");
  });

  if (tipValidation(billAmount, person)) {
    calculateTip(billAmount, percent, person);
    resetBtn.classList.remove("btn--disable");
  }
}
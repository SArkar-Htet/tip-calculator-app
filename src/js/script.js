const selector = (selector) => (document.querySelector(selector));
const bill = selector("#bill");
const numOfPerson = selector("#numOfPerson");
const tipAmount =selector("#tip_amount");
const totalAmount =selector("#total_amount");
const btnTip = document.querySelectorAll(".btn--tip");
const customTip = selector("#custom-tip");
const errMsgBill = selector(".err__msg--bill");
const errMsgPerson = selector(".err__msg--person");
const resetBtn = selector("#btn-reset");

btnTip.forEach(btn => {
  btn.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", reset);

bill.addEventListener("input", (e) => {
  onlyNumber(e);
  let value = Number(e.target.value);
  let person = Number(numOfPerson.value);
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
    errMsgBill.innerHTML = "";
    bill.classList.remove("app__input--err");
    if (person > 0 && percent) {
      calculateTip(value, percent, person);
      resetBtn.classList.remove("btn--disable");
    }
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
});

numOfPerson.addEventListener("input", (e) => {
  onlyNumber(e);
  const value = Number(e.target.value);
  let billAmount = Number(bill.value);
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
    errMsgPerson.innerHTML = "";
    numOfPerson.classList.remove("app__input--err");
    if (billAmount > 0 && percent) {
      console.log(value)
      calculateTip(billAmount, percent, value);
      resetBtn.classList.remove("btn--disable");
    }
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
});

customTip.addEventListener("input", (e) => {
  onlyNumber(e);

  const value = Number(e.target.value) / 100;
  let billAmount = Number(bill.value);
  let person = Number(numOfPerson.value);
  btnTip.forEach(btn => {
    btn.classList.remove("btn--tip--active");
  });

  if (tipValidation(billAmount, person)) {
    console.log(value)
    calculateTip(billAmount, value, person);
    resetBtn.classList.remove("btn--disable");
  }
})
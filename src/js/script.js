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

bill.addEventListener("input", handleInput);

numOfPerson.addEventListener("input", handleInput);

resetBtn.addEventListener("click", reset);

customTip.addEventListener("input", (e) => {
  onlyNumber(e);

  const value = Number(e.target.value) / 100;
  let billAmount = Number(bill.value);
  let person = Number(numOfPerson.value);
  btnTip.forEach(btn => {
    btn.classList.remove("btn--tip--active");
  });

  if (tipValidation(billAmount, person)) {
    calculateTip(billAmount, value, person);
    resetBtn.classList.remove("btn--disable");
  }
})
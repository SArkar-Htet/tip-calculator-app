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

customTip.addEventListener("input", handleCustomTip);
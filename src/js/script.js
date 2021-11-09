const selector = (selector) => (document.querySelector(selector));
const bill = selector("#bill");
const numOfPerson = selector("#numOfPerson");
const tipAmount =selector("#tip_amount");
const totalAmount =selector("#total_amount");
const btnTip = document.querySelectorAll(".btn--tip");
const errMsgBill = selector(".err__msg--bill");
const errMsgPerson = selector(".err__msg--person");
const resetBtn = selector("#btn-reset");

btnTip.forEach(btn => {
  btn.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", reset);
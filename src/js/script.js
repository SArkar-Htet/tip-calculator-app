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

resetBtn.addEventListener("click", (e) => {
  if (!resetBtn.classList.contains("btn--disable")) {
    btnTip.forEach(btn => {
      btn.classList.remove("btn--tip--active");
      tipAmount.textContent = "$0.00";
      totalAmount.textContent = "0.00";
      errMsgBill.innerHTML = "";
      errMsgPerson.innerHTML = "";
      resetBtn.classList.add("btn--disable");
    });
  } else {
    e.preventDefault();
  }
})

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
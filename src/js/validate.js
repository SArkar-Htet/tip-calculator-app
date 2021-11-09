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
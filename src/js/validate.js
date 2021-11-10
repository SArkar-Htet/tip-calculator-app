const tipValidation = (billAmount, person) => {
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

const onlyNumber = (e) => {
  let target = e.target;
  let value = target.value.replace(/[^0-9.]/g, "");
  target.value = value;
}

const inputValidation = (e) => {
  onlyNumber(e);
  let target = e.target;
  let name = target.name;
  let value = target.value;
  let billAmount = name === "bill" ? value : Number(bill.value);
  let person = name === "numOfPerson" ? value : Number(numOfPerson.value);
  let otherVal = name === "bill" ? person : billAmount;
  let errMsg = name === "bill" ? errMsgBill : errMsgPerson;
  let errInput = name === "bill" ? bill : numOfPerson;
  if (value && value > 0) {
    errMsg.innerHTML = "";
    errInput.classList.remove("app__input--err");
    if (otherVal > 0) {
      return true;
    }
  }
  return false;
}
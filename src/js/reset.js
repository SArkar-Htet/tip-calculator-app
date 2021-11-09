const reset = (e) => {
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
}
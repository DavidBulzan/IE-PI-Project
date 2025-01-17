const customInput = document.querySelector(".custom-input");
const amountRadios = document.querySelectorAll('input[name="amount"]');

customInput.addEventListener("focus", () => {
  amountRadios.forEach((radio) => {
    radio.checked = false;
  });
});

customInput.addEventListener("input", () => {
  amountRadios.forEach((radio) => {
    radio.checked = false;
  });
});

const agreementBox = document.getElementById("agreement");
const submitBtn = document.getElementById("submitBtn");

agreementBox.addEventListener("change", function () {
  if (this.checked) {
    submitBtn.disabled = false;
    submitBtn.classList.add("btn-primary-enabled");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("btn-primary-enabled");
  }
});

const donationForm = document.querySelector(".donation-form");
const submitButton = document.getElementById("submitBtn");

function showThanksMessage() {
  var message = document.getElementById("snackbar");
  message.className = "show";
  setTimeout(function () {
    message.className = message.className.replace("show", "");
  }, 3000);
}
donationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showThanksMessage();
  donationForm.reset();
});

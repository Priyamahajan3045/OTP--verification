const form = document.getElementById("otp-form");
const inputs = document.querySelectorAll(".otp-input");

// Focus on next input
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

// Mock valid OTP
const validOTP = "1230";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredOTP = Array.from(inputs).map(input => input.value).join("");

  if (enteredOTP === validOTP) {
    inputs.forEach(input => {
      input.classList.remove("error");
      input.classList.add("success");
    });
    alert("✅ OTP Verified Successfully!");
  } else {
    inputs.forEach(input => {
      input.classList.remove("success");
      input.classList.add("error");
    });
    alert("❌ Invalid OTP!");
  }
});
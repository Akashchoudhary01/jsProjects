document.addEventListener("DOMContentLoaded", () => {
      // Select DOM elements
  const numberInput = document.getElementById("number");
  const submitbtn = document.getElementById("btn");
  const resultDisplay = document.getElementById("result");
  const body = document.body; // Select the body element for background change

  // Difine game parameter
  const minNumber = 1;
  const maxNumber = 100;
  const Answer =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  let attempt = 0;

  submitbtn.onclick = function () {
    const guess = parseInt(numberInput.value);
    // Validate the input
    if (isNaN(guess)) {
      resultDisplay.textContent = "Please Enter A valid Number";
    } else if (guess < minNumber || guess > maxNumber) {
      resultDisplay.textContent = `Please Enter a valid Number  between ${minNumber} - ${maxNumber} `;
    } else {
      // Increase Attempts
      attempt++;
      if (guess < Answer) {
        resultDisplay.textContent = "To Low ! try Again";
      } else if (guess > Answer) {
        resultDisplay.textContent = "To High ! try Again";
      } else {
        resultDisplay.textContent = `Correct ! the number is ${Answer} . you took ${attempt} attempts`;
        submitbtn.disabled = true; // Disable further input
        body.style.backgroundColor = "#90ee90"; 
      }
    }

    numberInput.value = "";
  };
});

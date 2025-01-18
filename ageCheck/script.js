const myText = document.getElementById('text'); // Use quotes for ID strings
const myAge = document.getElementById('age'); // Fixed variable name to camelCase
const myBtn = document.getElementById('btn');
const result = document.getElementById('result');

myBtn.onclick = function () {
    let text = myText.value.trim(); // Trim to remove extra spaces
    let age = myAge.value.trim();

    if (!text || !age) {
        result.textContent = "Please fill in both the text and age fields!";
        return;
    }

    age = Number(age);

    if (isNaN(age)) {
        result.textContent = `Hey ${text}, please enter a valid number for age.`;
    } else if (age >= 90) {
        result.textContent = `${text}, oh no! At this age, take it easy!`;
    } else if (age >= 18) {
        result.textContent = `Hey ${text}, you are allowed to proceed!`;
    } else if (age <= 0) {
        result.textContent = `Hey ${text}, please enter a valid age greater than zero.`;
    } else {
        result.textContent = `Hey ${text}, grow up first!`;
    }
};

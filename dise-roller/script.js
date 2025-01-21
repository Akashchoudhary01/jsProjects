function rollDice() {
    const numbers = document.getElementById("number").value;
    const diseResult = document.getElementById("diceresult");
    const diseImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    // Generate random dice values and build image list
    for (let i = 0; i < numbers; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // Random number 1-6
        values.push(value);
        images.push(`<img src="./assets/${value}.png" alt="Dice ${value}">`);
    }

    // Display results
    diseResult.textContent = `Dice: ${values.join(", ")}`;
    diseImages.innerHTML = images.join("");
}

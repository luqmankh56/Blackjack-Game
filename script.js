let firstcard = 10;
let secondcard = 5;

let sum = firstcard + secondcard;
let message = "";

let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumel = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstcard + " " + secondcard;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want another try?";
    } else if (sum === 21) {
        message = "Congratulations, You have won.";
        hasBlackJack = true;
    } else {
        message = "You are out of the game.";
        isAlive = false;
    }

    messageEl.textContent = message;
}

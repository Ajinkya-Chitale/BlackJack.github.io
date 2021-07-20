let cardsArray = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let round = document.querySelector(".round");
let count = document.querySelector(".count");
let cards = document.querySelector(".cards");

let playerDetails = document.querySelector(".playerDetails");

// let player = {
//     name: prompt("Please Enter Your Name").toUpperCase(),
//     chips: prompt("Please Enter The Amount in $")
// }

let player = {
    name: "Ajinkya",
    chips: 200
}

playerDetails.textContent = player.name + ": $" + player.chips;

function startGame() {
    if(isAlive === false || hasBlackJack === true) {
        isAlive = true;
        hasBlackJack = false;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cardsArray = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    }
}

function getRandomCard() {
    let randomCard =  Math.floor(Math.random()*13) + 1;
    
    if(randomCard > 10) {
        return 10;
    }
    else if(randomCard === 1) {
        return 11;
    }
    else {
        return randomCard;
    }
}

function renderGame() {
    cards.textContent = "";
    for(let i=0; i<cardsArray.length; i++) {
        cards.textContent += cardsArray[i] + " ";
    }

    count.textContent = sum;
    if(sum <= 20) {
        message = "Do you want yo draw a new card?";
    }
    else if(sum === 21) {
        message = "Wohoo! You've got BlackJack!";
        hasBlackJack = true;
    }   
    else {
        message = "You're out of the game!";
        isAlive = false;
    }
    round.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cardsArray.push(newCard);
        renderGame();
    }
}
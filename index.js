let messageElementDisplay = document.querySelector('#message-el');
let sumElementDisplay = document.querySelector('#sum-el');
let cardElementDisplay = document.querySelector('#cards_el');
let playerElementDisplay = document.querySelector('#player_el');

let firstCard = getRandomCard();
let secondCard = getRandomCard();

let message = "";
let isAlive = false;
let hasBlackJack = false;

let cards = [];
let sum = 0 ;

let player = {
    name:"John",
    chips:"Php 5,000"
}
playerElementDisplay.textContent = player.name + ": " + player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber === 1){
        return 11;
    } else if(randomNumber > 10) {
        return 10
    } else {
        return randomNumber;
    }
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    for(let i = 0; i < cards.length; i++){
        cardElementDisplay.textContent = "Cards: " +  cards[i] + " ";
    }
    
    messageElementDisplay.textContent = message;
    cardElementDisplay.textContent = "Cards: " +  cards;
    sumElementDisplay.textContent = "Sum: " + sum;
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;

    isAlive = true;
    hasBlackJack = false;

    renderGame();
}

function newCard(){
    if(isAlive && !hasBlackJack){
        message = "Drawing new card from the deck!"
        messageElementDisplay.textContent = message;
        let thirdCard = getRandomCard();
        sum  += thirdCard;
        cards.push(thirdCard)
        renderGame();
    }
}
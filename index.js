let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let player = {
    name: "Messi",
    chips: 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRancomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    return randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRancomCard()
    let secondCard = getRancomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! you've got Blackjack"
        hasBlackJack = true
    }
    else {
        message = "you're out of the game"
        isAlive = false
    }
    cardEl.textContent = "card: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    messageEl.textContent = message
}
function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRancomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


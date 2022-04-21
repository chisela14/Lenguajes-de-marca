/*Cómo debería estructurarse:
-Bloque 0: declarar variables y constantes (aunque se pueden declarar variables después)
-B1: cómo va a funcionar el jugador -> resultado puntuación del jugador
    (va pidiendo números, se puede pasar)
-B2: cómo va a funcionar la máquina (dealer) -> resultado puntuación del dealer
    (se le asignan números, no se puede pasar) 
-B3: comparativa para saber quién gana el juego
    1.RPJ>RPD ¿?
        -Si RPJ > 21 = Jugador pierde
        -Else = Jugador gana 
    2. RPD>RPJ 
        -Jugador pierde
    3. RPD=RPJ
        -A nuestra elección
*/

//cartas
let palos = ["Corazones", "Treboles", "Diamantes", "Picas"];
let valores = [
  "As",
  "Rey",
  "Reina",
  "Sota",
  "Diez",
  "Nueve",
  "Ocho",
  "Siete",
  "Seis",
  "Cinco",
  "Cuatro",
  "Tres",
  "Dos"
];

//enlace html
let textArea = document.getElementById("texto");
let newGameButton = document.getElementById("nuevaPartida");
let hitButton = document.getElementById("otraCarta");
let stayButton = document.getElementById("plantarse");

//juego
let jugando = false;
let gameOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener("click", function() {
  jugando = true;
  gameOver = false;
  playerWon = false;

  deck = crearBaraja();
  barajar(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  newGameButton.style.display = "none";
  hitButton.style.display = "inline";
  stayButton.style.display = "inline";
  showStatus();
});

hitButton.addEventListener("click", function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener("click", function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function crearBaraja() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < palos.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < valores.length; valueIdx++) {
      let card = {
        suit: palos[suitIdx],
        value: valores[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

function showStatus() {

  let dealerCardString = "";
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + "\n";
  }

  let playerCardString = "";
  for (let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + "\n";
  }

  updateScores();

  textArea.innerText =
    "El dealer tiene: \n " +
    dealerCardString +
    "(Puntuación:" +
    dealerScore +
    ")\n\n" +
    "El jugador tiene: \n " +
    playerCardString +
    "(Puntuación:" +
    playerScore +
    ")\n\n";

  if (gameOver) {
    if (playerWon) {
      textArea.innerText += "¡Has ganado!";
    } else {
      textArea.innerText += "Gana el dealer";
    }
    newGameButton.style.display = "inline";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  }
}

function barajar(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getCardString(card) {
  return card.value + " de " + card.suit;
}

function getNextCard() {
  return deck.shift();
}

function getCardNumericValue(card) {
  switch (card.value) {
    case "As":
      return 1;
    case "Dos":
      return 2;
    case "Tres":
      return 3;
    case "Cuatro":
      return 4;
    case "Cinco":
      return 5;
    case "Seis":
      return 6;
    case "Siete":
      return 7;
    case "Ocho":
      return 8;
    case "Nueve":
      return 9;
    default:
      return 10;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === "As") {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
  updateScores();
  if (gameOver) {
    while (
      dealerScore < playerScore &&
      playerScore <= 21 &&
      dealerScore <= 21
    ) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  } else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) {
    if (playerScore > dealerScore) {
      playerWon = true;
    } else {
      playerWon = false;
    }
    newGameButton.style.display = "inline";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  }
}

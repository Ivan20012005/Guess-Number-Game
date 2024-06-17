let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let select = new Audio("./audio/select.wav");
let wrong = new Audio("./audio/wrong.wav");
let Correct = new Audio("./audio/correct.mp3");

const init = () => {
    computerGuess = Math.floor(Math.random()*100);
    document.getElementById("newGamebutton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const startNewGame = () => {
    document.getElementById("newGamebutton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

const newGamebegin = () => {
    select.play();
    window.location.reload();
}

//Main logic
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check the value low or high
    if (userGuess.length < maxGuess)
    {if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is High"
        userNumberUpdate.value = "";
        wrong.play();
    } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is Low"
        userNumberUpdate.value = "";
        wrong.play();
    } else {
        userGuessUpdate.innerHTML = "It's Correct!! Well Done!!"
        userNumberUpdate.value = "";
        Correct.play();
        startNewGame();
    }}
    else
    {if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! Correct answer was ${computerGuess}`
        userNumberUpdate.value = "";
        wrong.play();
        startNewGame();
    } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! Correct answer was ${computerGuess}`
        userNumberUpdate.value = "";
        startNewGame();
    } else {
        userGuessUpdate.innerHTML = "It's Correct!! Well Done!!"
        userNumberUpdate.value = "";
        Correct.play();
        wrong.play();
        startNewGame();
    }}
    document.getElementById("attempts").innerHTML = userGuess.length;
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";
};

const esayMode = () => {
    maxGuess = 10;
    select.play();
    startGame();
};

const hardMode = () => {
    maxGuess = 5;
    select.play();
    startGame();
};
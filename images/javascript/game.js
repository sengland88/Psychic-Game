var theChoices = ["a" , "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
console.log(theChoices)

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedAlready = [];

var randomLetter = theChoices[Math.floor(Math.random() * theChoices.length)]
console.log(randomLetter)

function restart() {
    guessesLeft = 10;
    guessedAlready = [];
    randomLetter = theChoices[Math.floor(Math.random() * theChoices.length)];
    document.getElementById("guessesLeft-text").innerHTML = guessesLeft
    document.getElementById("guessedAlready-text").innerHTML = guessedAlready
    console.log(randomLetter)
}

function winsUp() {
    wins++
    alert("You Won!")
    document.getElementById("wins-text").innerHTML = wins
    restart()
}

function lossesUp() {
        losses++
        console.log("you lost!")
        document.getElementById("losses-text").innerHTML = losses
        alert("You Lost!")
        restart()
}

function youGuessed() {
    var youPick = event.key.toLowerCase()
    guessedAlready.push(youPick)
    console.log(guessedAlready)
    document.getElementById("guessedAlready-text").innerHTML = guessedAlready

}

document.onkeypress = function(event) {
    var letterGuessed = event.key.toLowerCase()
    console.log(letterGuessed)
    youGuessed()

    if (letterGuessed === randomLetter) {
        winsUp()
        console.log("you picked the right letter")

    } else {
        console.log("pick another letter")       
        guessesLeft--;
        document.getElementById("guessesLeft-text").innerHTML = guessesLeft        
    }
    
    if (guessesLeft === 0) {
        lossesUp()
    }
   


}


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// genero due numeri random da 1 a 6 
const player = Math.floor(Math.random() * 6 + 1) ;
const computer = Math.floor(Math.random() * 6 + 1) ;

// stampo i numeri in console
console.log("You: ", player);
console.log("Computer: ", computer);

// calcolo chi ha vinto e stampo l'esito
if (player > computer) {
    console.log("You Win! :D");
} else if (player < computer) {
    console.log("You Lose! :(");
} else {
    console.log("It's a Tie");

}

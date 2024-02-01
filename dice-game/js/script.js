/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// inizializzo costanti
const buttonElement = document.querySelector(".my_button");
const playerElement = document.querySelector("#player");
const computerElement = document.querySelector("#computer");
const resultElement = document.querySelector("#result");
resultElement.style.backgroundColor = "#5D3FD3";

// creo un nuovo elemento "newPlayerElement" di classe "dice" e lo inserisco all'interno di "playerElement"
const newPlayerElement = document.createElement("div");
newPlayerElement.className = "dice" ;
playerElement.append(newPlayerElement);

// creo un nuovo elemento "newComputerElement" di classe "dice" e lo inserisco all'interno di "computerElement"
const newComputerElement = document.createElement("div");
newComputerElement.className = "dice" ;
computerElement.append(newComputerElement);

// creo un nuovo elemento "newResultElement" di classe "result" e lo inserisco all'interno di "resultElement"
const newResultElement = document.createElement("div");
newResultElement.className = "result" ;
resultElement.append(newResultElement);

// scrivo funzione che al click del bottone lancia i dadi e calcola il vincitore
buttonElement.addEventListener('click', 
    function() {

        // genero due numeri random da 1 a 6 
        const player = Math.floor(Math.random() * 6 + 1) ;
        const computer = Math.floor(Math.random() * 6 + 1) ;

        // inserisco i valori nell'elemento HTML per visualizzarli in pagina
        newPlayerElement.innerHTML = player;
        newComputerElement.innerHTML = computer;
        
        // calcolo chi ha vinto, stampo l'esito e in base al risultato cambio colore a result
        if (player > computer) {
            newResultElement.innerHTML = "You Win! :D";
            resultElement.style.backgroundColor = "#008000";
        } else if (player < computer) {
            newResultElement.innerHTML = "You Lose! :(";
            resultElement.style.backgroundColor = "#FF0000";
        } else {
            newResultElement.innerHTML = "It's a Draw! :/";
            resultElement.style.backgroundColor = "#0000FF";
        }
    }
)



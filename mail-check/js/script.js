/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
(NON utilizzate il metodo .includes())
*/


// inizializzo costanti e variabili
const emails =  ["albusdumbledore@hogwarts.wiz", "nevillelongbottom@hogwarts.wiz", "hermionegranger@hogwarts.wiz", "harrypotter@hogwarts.wiz", "ronaldweasley@hogwarts.wiz", "ginnyweasley@hogwarts.wiz", "minervamcgonagall@hogwarts.wiz"];
const inputElement = document.querySelector("#input");
const buttonElement = document.querySelector("#my_button");
const resultElement = document.querySelector("#result");
let login = false;

// scrivo funzione che al click del bottone controlla se la mail inserita dall'utente è presente nell'array
buttonElement.addEventListener('click',
    function() {
        for (let i = 0; i < emails.length; i++ ) {
            if (inputElement.value == emails[i]) {
                login = true;
            }
        }
        
        // stampo risultato del login
        if (login == true) {
            resultElement.innerHTML = "Alohomora!";
        } else {
            resultElement.innerHTML = "Expelliarmus!";
        }
        login = false;
    }
)

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// funzione custom per creare box
function creaBox( tipo, classe, testo ){
    let div = document.createElement( tipo );
    div.classList.add( classe );
    div.innerText = testo;
    return div;
}

//funzione al click del bottone play
document.getElementById( "play" ).addEventListener( "click", function(){ 
    //variabili
    let grid = document.querySelector( '.grid' );
    let diff = document.getElementById( "diff" ).value;
    let button = document.createElement( "button" );
    let main = document.querySelector( "main" );
    //creo bottone restart
    button.classList.add( "button" );
    button.setAttribute( "onclick", "window.location.reload()")
    button.innerText = "Restart";
    main.append( button );

    // funzione custom per creare box in base alla difficoltà
    function difficoltà( celle, misure ) {
        for( let i = 1; i <= celle; i++ ){
            const creaDiv = creaBox( 'div', misure , i );
            grid.appendChild( creaDiv );
            creaDiv.addEventListener( "click", function(){
            this.classList.toggle( "active" );
        })
    }
    }

    //condizioni di difficoltà
    if( diff == "1" ){
        difficoltà( 100 , "box-easy")
    } 
    else if( diff == "2"){
        difficoltà( 81, "box-medium")
    }
    else if( diff == "3"){
        difficoltà( 49, "box-hard")
    }
})


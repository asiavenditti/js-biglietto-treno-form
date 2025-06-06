/* 
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/

/* MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


const form = document.getElementById('ticketForm');

form.addEventListener('submit', function (e) {

    e.preventDefault()

    const userKm = Number(document.getElementById('kmInput').value);
    const userAge = Number(document.getElementById('ageInput').value);
    let fullPrice = 0.21 * userKm
    const youngDiscount = 0.8;
    const seniorDiscount = 0.6;

    if (userAge < 18) {
        fullPrice = fullPrice * youngDiscount
    } else if (userAge > 65) {
        fullPrice = fullPrice * seniorDiscount
    } else {
        fullPrice
    }

    console.log('Il prezzo del tuo biglietto è', fullPrice.toFixed(2), '€')

})


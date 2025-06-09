/* 
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/

/* MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const ticketType = document.getElementById('ticketType')
const newTicket = document.getElementById('generateTicket');
const nameTicket = document.getElementById('passengerName');
const totalPrice = document.getElementById('ticketPrice');
const userKmEl = document.getElementById('kmInput');
const userAgeEl = document.getElementById('ageSelect');
const nameValueEl = document.getElementById('nameInput');


// form 

const form = document.getElementById('ticketForm');

// gestisco l'evento "submit"

form.addEventListener('submit', function (e) {

    e.preventDefault()

    // racchiudo i valori degli input nelle costanti

    const userKm = Number(userKmEl.value);
    const userAge = userAgeEl.value;
    const nameValue = nameValueEl.value;


    let fullPrice = 0.21 * userKm;
    const youngDiscount = 0.8;
    const seniorDiscount = 0.6;
    let offerType = 'Standard';


    // calcolo lo sconto

    if (userAge === 'minor') {
        fullPrice = fullPrice * youngDiscount
        offerType = 'Young'

    } else if (userAge === 'senior') {
        fullPrice = fullPrice * seniorDiscount;
        offerType = 'Senior';
    }

    console.log('Il prezzo del tuo biglietto è', fullPrice.toFixed(2), '€');

    // stampo il biglietto richiamando gli span



    newTicket.classList.remove('d-none');
    nameTicket.innerHTML = nameValue;
    totalPrice.innerHTML = fullPrice.toFixed(2) + ' €';
    ticketType.innerHTML = offerType;





})


/* 
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/

const btn = document.getElementById('calcPrice');

btn.addEventListener('click', function () {
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
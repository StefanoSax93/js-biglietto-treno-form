/*Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
nome e cognome
km da percorrere
eta (input testuale o number)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)
Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi
BONUS
la sezione del biglietto generato, all’avvio dovrebbe essere nascosta e comparire solo quando si preme il pulsante genera
Questo compare solo se i dati inseriti sono validi
per l’età inserire una select con 3 voci:
minorenne
maggiorenne
over 65
In base alla voce scelta dall’utente, fare i dovuti calcoli*/

const inputName = document.querySelector("[name='userName']");
const inputKm = document.querySelector("[name='km']");
const inputEta = document.querySelector("[name='eta']");
// let biglietto = document.querySelector(".biglietto-finale")
const generateButton = document.getElementById("generateButton");
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () {
    window.location.reload();
});

generateButton.addEventListener("click", function () {

    let userName = document.getElementById("userName");
    // @ts-ignore
    userName.innerHTML = inputName.value;
    
    const prezzoAlKm = 0.21;
    // @ts-ignore
    let quantitaKm = inputKm.value;
    // @ts-ignore
    let eta = inputEta.value;
    let prezzoBiglietto = parseInt(quantitaKm) * prezzoAlKm;
    let prezzoFinale;

    if (parseInt(eta) < 18) {
    (prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 20 / 100));
}   else if (parseInt(eta) > 65) {
    (prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 40 / 100));
}   else {
    (prezzoFinale = prezzoBiglietto);
};
    let finalPrice = document.getElementById("finalPrice");
    finalPrice.innerHTML = `${prezzoFinale.toFixed(2)}€`;

    let offertType = document.getElementById("offertType")
    if (parseInt(eta) < 18) {
        offertType.innerHTML = "Biglietto ridotto minorenni";
    }   else if (parseInt(eta) > 65) {
        offertType.innerHTML = "Biglietto ridotto over-65";
    }   else {
        offertType.innerHTML = "Biglietto standard";
    };

    let wagon = document.getElementById("wagon");
    // @ts-ignore
    wagon.innerHTML = Math.floor(Math.random() *5) +1;

    let cpCode = document.getElementById("cpCode");
    // @ts-ignore
    cpCode.innerHTML = Math.floor(Math.random() *9999) +1;
})



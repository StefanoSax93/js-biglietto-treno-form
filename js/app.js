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
const prezzoAlKm = 0.21;

// let biglietto = document.querySelector(".biglietto-finale")
const generateButton = document.getElementById("generateButton");
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () {
    window.location.reload();
});

generateButton.addEventListener("click", function () {

    let quantitaKm = parseInt(inputKm.value);
    let eta = parseInt(inputEta.value);
    let datiValidi = true;
    //controllo i dati inserit
    if (isNaN(eta) || isNaN(quantitaKm)) {
        datiValidi = false;
        alert("Inserisci un numero valido per KM ed età");
    }
      // controllo che età sia maggiore di 14
    if (eta < 10) {
        datiValidi = false;
        alert("L'età minima consentita è di 10 anni!");
    }
      // controllo che i km non siano superiori a 2000 e minori di 10
    if (quantitaKm > 2000 || quantitaKm < 10) {
        datiValidi = false;
        alert("I Km devono essere compresi tra 10 e 2000");
    }

    if (datiValidi) {
        // calcolo prezzo finale
        let prezzoFinale = quantitaKm * prezzoAlKm;
        let scontoDaApplicare = 0;
        // condizioni sconti < 18
        if (eta < 18) {
            scontoDaApplicare = 0.2;     
        } else if (eta > 65) {
            scontoDaApplicare = 0.4; 
        }
        
        prezzoFinale -= prezzoFinale * scontoDaApplicare;
    
        let offertType = document.getElementById("offertType")
        if (parseInt(eta) < 18) {
            offertType.innerHTML = "Biglietto ridotto minorenni";
        }else if (parseInt(eta) > 65) {
            offertType.innerHTML = "Biglietto ridotto over-65";
        }else {
            offertType.innerHTML = "Biglietto standard";
        };

        let wagon = document.getElementById("wagon");
    
        wagon.innerHTML = Math.floor(Math.random() *7) +1;

        let cpCode = document.getElementById("cpCode");
    
        cpCode.innerHTML = Math.floor(Math.random() *9999) +1;
        const userName = document.getElementById("userName");
        const finalPrice = document.getElementById("finalPrice");
        finalPrice.innerHTML = `${prezzoFinale.toFixed(2)}€`;
        userName.innerHTML = inputName.value;
        
        const containerBiglietto = document.querySelector(".biglietto-finale")
        containerBiglietto.classList.remove("d-none");
        
    } else {
        datiValidi = false;
    }
});



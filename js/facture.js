let nbPassagers;
let nbVehicules;

let AffichageInfo = async function() {
    let responseReservation = await fetch("https://can.iutrs.unistra.fr/api/reservation/1");
    let dataReservation = await responseReservation.json();

    nbPassagers = dataReservation.nbPassagers;
    nbVehicules = dataReservation.nbVehicules;

    let horodatage = document.getElementById("horodatage");
    let reservationId = document.getElementById("reservationId");
    let reservationNom = document.getElementById("reservationNom");
    let traversee = document.getElementById("traversee");
    let date = document.getElementById("dateTraversee");
    let heure = document.getElementById("heureDepart");
    let bateau = document.getElementById("bateau");

    horodatage.innerHTML = dataReservation.date; //pas le bon horodatage à revoir
    reservationId.innerHTML = dataReservation.id;
    reservationNom.innerHTML = dataReservation.nom;
    traversee.innerHTML = `${dataReservation.portDepart} - ${dataReservation.portArrivee}`;
    date.innerHTML = dataReservation.date; 
    heure.innerHTML = dataReservation.heure;
    bateau.innerHTML = dataReservation.bateau;
}

AffichageInfo();


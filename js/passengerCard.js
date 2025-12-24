let nbPassagers;

let AffichagePassagers = async function(numeroPassager){
	
	//fetch API
	let responseReservation = await fetch("https://can.iutrs.unistra.fr/api/reservation/1");
    let dataReservation = await responseReservation.json();
	nbPassagers = dataReservation.nbPassagers;

	let depart = document.getElementById("depart");
	let arrivee = document.getElementById("arrivee");
	let date = document.getElementById("date");
	let heure = document.getElementById("heure");
	let bateau = document.getElementById("bateau");
	let numReservation = document.getElementById("numReservation");
	let nomReservation = document.getElementById("nomReservation");

	depart.innerHTML = dataReservation.portDepart;
	arrivee.innerHTML = dataReservation.portArrivee
	date.innerHTML = dataReservation.date;
	heure.innerHTML = dataReservation.heure;
	bateau.innerHTML = dataReservation.bateau;
	numReservation.innerHTML = dataReservation.id;
	nomReservation.innerHTML = dataReservation.nom;
	
	//fetch API
	let responsePassager = await fetch(`https://can.iutrs.unistra.fr/api/reservation/1/passager/${numeroPassager}`);
    let dataPassager = await responsePassager.json();
	
	let nomPassager = document.getElementById("nomPassager");
	let prenomPassager = document.getElementById("prenomPassager");
	let catPassager = document.getElementById("catPassager");
	let prixPassager = document.getElementById("prixPassager");

	nomPassager.innerHTML = dataPassager.nom;
	prenomPassager.innerHTML = dataPassager.prenom;
	catPassager.innerHTML = dataPassager.libelleCategorie;
	prixPassager.innerHTML = dataPassager.price;
}

let numeroPassager = 1;
AffichagePassagers(numeroPassager);

let PassagerPrecedent = function(){
	
	if (numeroPassager == 0)
 	{
 		return;
    }
	
 	numeroPassager--;

	AffichagePassagers(numeroPassager);
}

let PassagerSuivant = function(){
	
	if (numeroPassager == nbPassagers)
 	{
 		return;
    }
	
 	numeroPassager++;

	AffichagePassagers(numeroPassager);
}

let buttonPrecedent = document.getElementById("precedent");
let buttonSuivant = document.getElementById("suivant");

buttonPrecedent.addEventListener("click", PassagerPrecedent);
buttonSuivant.addEventListener("click", PassagerSuivant);

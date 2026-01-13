let params = new URLSearchParams(window.location.search);
let numeroReservation = params.get("numeroReservation");

let nbPassagers;
let nbVehicules;

let infoPassagers = document.getElementById("infoPassagers");
let infoVehicules = document.getElementById("infoVehicules");


//Fonction de l'affichage general (infos qui sont affichés sur les deux cartes)
let Affichage = async function(){
	
	//fetch API
	let responseReservation = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${numeroReservation}`);
    let dataReservation = await responseReservation.json();
	
	nbPassagers = dataReservation.nbPassagers;
	nbVehicules = dataReservation.nbVehicules;

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
}

//fonction pour affiché les infos propres aux passagers 
let AffichagePassager = async function(numeroPassager){

	infoPassagers.classList.remove("hidden");
	infoVehicules.classList.add("hidden");
	
	//fetch API
	let responsePassager = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${numeroReservation}/passager/${numeroPassager}`);
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

//fonction pour affiché les infos propres aux passagers 
let AffichageVehicule = async function(numeroVehicule){
	
	infoVehicules.classList.remove("hidden");
	infoPassagers.classList.add("hidden");

	if (numeroVehicule == 0)
	{
		alert("Pas de vehicules pour cette reservation");
		return;
	}

	//fetch API
	let responseVehicule = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${numeroReservation}/vehicule/${numeroVehicule}`);
    let dataVehicule = await responseVehicule.json();
	
	let catVehicule = document.getElementById("catVehicule");
	let nombreVehicule = document.getElementById("nombreVehicule");
	let prixVehicule = document.getElementById("prixVehicule");

	catVehicule.innerHTML = dataVehicule.libelle;
	nombreVehicule.innerHTML = dataVehicule.quantite;
	prixVehicule.innerHTML = dataVehicule.prix;
}

Affichage();
AffichagePassager(1);

let numeroPassager = 1;

if (nbPassagers > 0)
{
	numeroPassager = 1;
}

else 
{
	numeroPassager = 0;
}

let buttonPassager = document.getElementById("buttonPassager");
let buttonVehicule = document.getElementById("buttonVehicule");

buttonPassager.addEventListener("click",AffichagePassager(1));
buttonVehicule.addEventListener("click",AffichageVehicule(1));

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

let variables = { //gestion des variables globales
    numeroReservation: null,
    carteActuelle: "passager",
    numeroPassager: 1,
    numeroVehicule: null,
    nbPassagers: null,
    nbVehicules: null,
};

//Fonction de l'affichage general (infos qui sont affichés sur les deux cartes)
let Affichage = async function(){
	
	//fetch API
	let responseReservation = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${variables.numeroReservation}`);
    let dataReservation = await responseReservation.json();
	
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
let AffichagePassager = async function(){

	variables.carteActuelle = "passager";

	let infoPassagers = document.getElementById("infoPassagers");
	let infoVehicules = document.getElementById("infoVehicules");

	infoPassagers.classList.remove("hidden");
	infoVehicules.classList.add("hidden");
	
	//fetch API
	let responsePassager = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${variables.numeroReservation}/passager/${variables.numeroPassager}`);
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
let AffichageVehicule = async function(){
	
	variables.carteActuelle = "vehicule"

	let infoPassagers = document.getElementById("infoPassagers");
	let infoVehicules = document.getElementById("infoVehicules");

	infoVehicules.classList.remove("hidden");
	infoPassagers.classList.add("hidden");

	//fetch API
	let responseVehicule = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${variables.numeroReservation}/vehicule/${variables.numeroVehicule}`);
    let dataVehicule = await responseVehicule.json();
	
	let catVehicule = document.getElementById("catVehicule");
	let nombreVehicule = document.getElementById("nombreVehicule");
	let prixVehicule = document.getElementById("prixVehicule");

	catVehicule.innerHTML = dataVehicule.libelle;
	nombreVehicule.innerHTML = dataVehicule.quantite;
	prixVehicule.innerHTML = dataVehicule.prix;
}


let Precedent = function(){
	
	if (variables.carteActuelle == "passager")
	{
		if (variables.numeroPassager == 1)
		{
			return;
		}
		
		variables.numeroPassager--;

		AffichagePassager(variables.numeroPassager);
	}

	else
	{
		if (variables.numeroVehicule == 1)
		{
			return;
		}
		
		variables.numeroVehicule--;

		AffichageVehicule(variables.numeroVehicule);
	}
}

let Suivant = function(){
	
	if (variables.carteActuelle == "passager")
	{
		if (variables.numeroPassager == variables.nbPassagers)
		{
			return;
		}
		
		variables.numeroPassager++;

		AffichagePassager(variables.numeroPassager);
	}

	else
	{
		if (variables.numeroVehicule == variables.nbVehicules)
		{
			return;
		}
		
		variables.numeroVehicule++;

		AffichageVehicule(variables.numeroVehicule);
	}
}


let Main = async function () {
	
	let parametresUrl = new URLSearchParams(window.location.search);
	variables.numeroReservation = parametresUrl.get("numeroReservation");

	let response = await fetch(`https://can.iutrs.unistra.fr/api/reservation/${variables.numeroReservation}`);
    let data = await response.json();
	
	variables.nbPassagers = data.nbPassagers;
	variables.nbVehicules = data.nbVehicules;

	if (variables.nbVehicules > 0)
	{
		variables.numeroVehicule = 1;
	}

	else 
	{
		variables.numeroVehicule = 0;
	}

	await Affichage();
	await AffichagePassager(1);

	let buttonPassager = document.getElementById("buttonPassager");
	let buttonVehicule = document.getElementById("buttonVehicule");

	buttonPassager.addEventListener("click", async () => await AffichagePassager(1));
	buttonVehicule.addEventListener("click", async () => { if (variables.numeroVehicule == 0) {alert("il n'y a pas de vehicule pour cette reservation")} else { await AffichageVehicule(1)} } )
	
	let buttonPrecedent = document.getElementById("buttonPrecedent");
	let buttonSuivant = document.getElementById("buttonSuivant");

	buttonPrecedent.addEventListener("click",Precedent);
	buttonSuivant.addEventListener("click",Suivant);
}

Main();
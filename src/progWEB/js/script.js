let liaison = { //declaration dictionnaire liaison
    1: ["Lorient", "Groix"],
    2: ["Grois", "Lorient"],
    3: ["Quiberon", "Le Palais"],
    4: ["Le Palais", "Quiberon"]
}

let addams = {
	"reservation": 
		{
			"nom": "Famille Addams",
			"idLiaison": 1,
			"date": "2025-11-01",
			"heure": "09:45",
			"horodatage": "2025-10-20 16:55:14",
			"navire": "Breizh Nevez"
		},
    "passagers": [
		{
			"nom": "Addams",
			"prenom": "Gomez",		
			"codeCategorie": "adu26p"
		},
		{
			"nom": "Addams",
			"prenom": "Morticia",		
			"codeCategorie": "adu26p"
		},
		{
			"nom": "Addams",
			"prenom": "Lurch",		
			"codeCategorie": "je1825"
		},
		{
			"nom": "Addams",
			"prenom": "Mercredi",		
			"codeCategorie": "enf417"
		},
		{
			"nom": "Addams",
			"prenom": "Pugsley",		
			"codeCategorie": "bebe"
		}
    ],

    "vehicules": [
		{
			"codeCategorie": "cat4",
			"quantite": 1
		},
		{
			"codeCategorie": "trot",
			"quantite": 2
		}	  
	] 
}




let AffichagePassagers = async function(){
	
	//fetch API
	let responseReservation = await fetch("https://can.iutrs.unistra.fr/api/reservation/1");
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
	
	//fetch API
	let responsePassager = await fetch("https://can.iutrs.unistra.fr/api/reservation/1/passager/1");
    let dataPassager = await responsePassager.json();
	
	let nomPassager = document.getElementById("nomPassager");
	let prenomPassager = document.getElementById("prenomPassager");
	let catPassager = document.getElementById("catPassager");
	let prixPassager = document.getElementById("prixPassager");


}

let buttonPassagers = document.getElementById("choixPassagers");

if (buttonPassagers) { // seulement si l'élément existe
    buttonPassagers.addEventListener("click", AffichagePassagers);
}

// buttonSuivant.addEventListener("click", buttonVehicules);




// let gareDepart = document.getElementById("Depart");
// let gareArrivee = document.getElementById("Arrivee");
// let date = document.getElementById("Date");
// let heure = document.getElementById("Heure");
// let bateau = document.getElementById("Bateau");
// let NumReservation = document.getElementById("NumReservation");
// let nomReservation = document.getElementById("NomReservation");
// let nomPassager = document.getElementById("NomPassager");
// let prenomPassager = document.getElementById("PrenomPassager");
// let categoriePassager = document.getElementById("CategoriePassager");




// let nbPassagers = addams.passagers.length;
// let numPassager = 0;

// let PassagerPrecedent = function(){
// 	if (numPassager == 0)
// 	{
// 		return;
//     }
	
// 	numPassager--;

// 	nomPassager.innerHTML = addams.passagers[numPassager].nom;
// 	prenomPassager.innerHTML = addams.passagers[numPassager].prenom;
// 	categoriePassager.innerHTML = addams.passagers[numPassager].codeCategorie;

// }

// let PassagerSuivant = function(){
// 	if (numPassager == nbPassagers - 1)
// 	{
// 		return;
//     }
	
// 	numPassager++;

// 	nomPassager.innerHTML = addams.passagers[numPassager].nom;
// 	prenomPassager.innerHTML = addams.passagers[numPassager].prenom;
// 	categoriePassager.innerHTML = addams.passagers[numPassager].codeCategorie;
// }

// let buttonPrecedent = document.getElementById("precedent");
// let buttonSuivant = document.getElementById("suivant");

// buttonPrecedent.addEventListener("click", PassagerPrecedent);
// buttonSuivant.addEventListener("click", PassagerSuivant);






// // for(let elem of addams.passagers) {
// //     p.innerHTML += elem.prenom + " ";
// // 	p.innerHTML += elem.nom + " ";
// // }

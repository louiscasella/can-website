let params = new URLSearchParams(window.location.search);

let numeroReservation = params.get("numeroReservation");

let boardingPassLink = document.getElementById("boardingPassLink");

boardingPassLink.innerHTML =   `<a href="passengerCard.html?numeroReservation=${numeroReservation}">
                                    <button id="choixPassagers">Cartes Passagers</button>
                                </a>
                                
                                <a href="vehiculeCard.html?numeroReservation=${numeroReservation}">
                                    <button id="choixVehicules">Cartes Vehicules</button>
                                </a>`
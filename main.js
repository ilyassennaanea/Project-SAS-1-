const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
 const prompt = require('prompt-sync')();
let idticket=1

function afficher(){
    console.log(`=================================
RAILWAY MANAGER
=================================
1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter
        `);
}
function afficherTrajets() {
    console.log('=== TRAJETS DISPONIBLES ===')
    for(let i=0;i<trips.length;i++){
        console.log(`#${trips[i].id} ${trips[i].departure} → ${trips[i].destination}
            Départ :${trips[i].departureTime}
            Arrivée : ${trips[i].arrivalTime}
            Prix : ${trips[i].price} DH
            Places disponibles : ${trips[i].availableSeats} `)

    }

}

function AcheterTieckt(){
let passengerName=prompt('Entrer votre nom: ');
let idtrajet=prompt('Entrer le ID de trajet');
for(i=0;i<trips.length;i++){
    if(idtrajet==trips[i].id && trips[i].availableSeats>0){
        
        let seatNumber = 50 - trips[i].availableSeats + 1; 
        let new_ticket={id:idticket,passengerName:passengerName,tripId:trips[i].id,seatNumber:seatNumber,price:trips[i].price}
        tickets.push(new_ticket)
        trips[i].availableSeats--;
        idticket++;
    }
}
  
}

 const tickets = [];
     function AfficherTicket(){
        for(let i=0;i<tickets.length;i++){
            console.log(`=== TICKETS ===
Ticket #${tickets[i].id}
Passager : ${tickets[i].passengerName}
Trajet : ${trips[i].departure} → ${trips[i].destination}
Place : ${tickets[i].seatNumber}
Prix : ${tickets[i].price} DH`)
        }
     }
     function AnnulerTicket(){
        let trouve=false
        let idTicketRechercher=prompt(' Entrer Identifiant du ticket que tu veut suprimer ')
        for(let i=0;i<tickets.length;i++){
             if(idTicketRechercher==tickets[i].id){
                trips[tickets[i].tripId-1].availableSeats++;
                /*for(let j = 0; j < trips.length ; j++)
                {
                    if(trips[j].id == tickets[i].tripId)
                    {
                        trips[j].availableSeats++;
                        break;
                    }
                }*/
                tickets.splice(i,1);
                trouve = true
                console.log(' ticket annule avec succes')
                break;
             }
        }
    if(trouve == false){
        console.log(' operation aperdu')
                  }

                  
     }
     function RechercherTicket(passengerNameRechercher){
        let TicketsPassagar=tickets.filter((element) => {
            return element.passengerName ==passengerNameRechercher
            
})}

let choix;

while (choix !== 0) {
 afficher();
    choix = Number(prompt('Entrer votre choix: '));

    switch (choix) {

        case 1:
            afficherTrajets();
            break;

        case 2:
            AcheterTieckt();
            break;

        case 3:
            AfficherTicket();
            break;
        case 4:
            AnnulerTicket()
            break;

        case 0:
            console.log('Au revoir');
            break;

        default:
            console.log('Choix invalide !');
    }
} 
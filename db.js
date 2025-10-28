const sqlite= require('sqlight3');
const db= new sqlite.Database('travel.db');
const createTripTable= `CREATE TABLE IF NOT EXISTS TRIP (
ID INTEGER PRIMARY KEY AUTOINCREMENT,
DESTINATIONNAME TEXT NOT NULL,
LOCATION TEXT NOT NULLL,
LANGUAGE TEST NOT NULL,
DESCRIPTION TEXT NOT NULL,
FLIGHTCOST REAL DEFAULT 0,
ACCOMODATIONCOST REAL DEFAULT 0,
MEALCOST REAL DEFAULT 0,
VISACOST REAL DEFAULT 0,
TRANSPORTATIONCOST REAL DEFAULT 0, 
CURRENCYCODE TEXT DEFAULT 'N/A'
)`;
//default= law mafesh value hayebaa 0 , not null= law mafesh value hay fail as its a required field
module.exports= {
    db,
    createTripTable,
};

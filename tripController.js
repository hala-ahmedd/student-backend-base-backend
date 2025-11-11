const {trips}=require('../models/tripmodel');
const db_access = require('../db.js');

/*const retrievalltrips=(req,res)=>{
    const query = `SELECT * FROM trips`

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error retrieving trips:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(rows);
    });
}*/

const createTrip=(req,res)=>{
const {destinationName,
destination,
duration,
language,
description,
accommodation,
currency,}=req.body;

if (!destinationName || !destination || !duration || !language || !description || !accommodation || !currency) {
    return res.status(400).json({ error: 'All fields are required' });
}

query = "INSERT INTO trips (DESTINATION, DURATION, PRICE, LANGUAGE, DESCRIPTION, FLIGHTCOST, ACCOMMODATION, ACCOMMODATIONCOST, MEALCOST, TRANSPORTATIONCOST, ACTIVITIESCOST, CURRENCY) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

db.run(query, function(err) {
    if (err) {
        console.error('Error creating trip:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Trip created successfully', tripId: this.lastID });
});

}


const retrievalltrips= (req,res)=>{
    const query=`SELECT * FROM TRIP`;
    db.all(query, (err,rows)=> {
        return res.status(200).json({
            message:"trip success",
            data : rows
        }); 
});
};

const retreiveTripById= (req,res) => {
    const id= req.parms.id; 
    const query= 'SELECT * FROM TRIP WHERE ID = ? ';
    db.get (query, (err, row)=>{
        return res.status(200).json({
            message:"trip success",
            data : rows
             });
    });
};

const deleteTripById= (req,res) => {
    const id= req.parms.id; 
    const query= 'DELETE FROM TRIP WHERE ID = ?';
    db.run (query,function (err){
        return res.status(200).json({
            message:"trip success",
             });
    });
};


module.exports={
    retrievalltrips,
    createTrip,
    deleteTripById
};

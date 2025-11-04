const bcrypt= require('bcryptjs');
const {db}= require('../db.js');
const signup= (req,res)=> {
    const name= req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const role='user';

    if (!name || !email || !password){
        return res.status(400).send("please provide name, email, and password");
    }
}
bcrypt.hash(password,10,(err,hashedpassword)=> {
    if (err) {
        console.error(err);
        return res.status(500).send('error hashing password');
    }
    const query= `
        INSERT INTO USER (NAME,EMAIL,ROLE,PASSWORD)
        VALUES ('${name}','${email}','${role}','${hashpassword}')
        `;
    db.run(query,(err)=> {
            if (err) {
                console.log(err.message);
                if (err.message.includes('UNIQUE constraint')) {
                    return res.status(400).send('Email already exists');
                }
                return res.status(500).send('database error');
            }
            return res.status(200).send('registration successful');
        });    
});





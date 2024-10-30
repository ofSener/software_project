const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');






// register
const registerUser = async(req, res) => {
    const {userName, email, password} = req.body;

    try{

        const hashPassword = await bycrypt.hash(password, 12);
        const newUSer = new User({
            userName, 
            email , 
            password : hashPassword,
        })

        await newUSer.save()
        res.status(200).json({
            success : true,
            message : "Registration successful ",
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : "some error occured",
        });
    }
};


//login
const login = async(req, res) =>{

    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : "some error occured",
        });
    }

};

//logout



//auth middleware




module.exports = {registerUser };




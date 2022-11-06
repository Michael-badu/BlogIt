const userModel = require('../models/userModel')
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken')

const addUser = async (req, res, next) => {
    try {
        const { first_name, last_name, username, email, password } = req.body
        
        const newUser = new User({
        first_name,
        last_name,
        username,
        email,
        password,
        })

        const createdUser = await newUser.save()

        return res.status(201).json({status: true, data: createdUser})
    } 
    
    catch (error) {
        next(error)
    }
}

const userLogin = async(req, res) =>{
    const {email, password} = req.body;

    try{
        const user = await userModel.findOne({email})

        if (!user){
            return res.status(400).send({message:"User not found! please register"})
        }

        const validateUser = await bcrypt.compare(password, user.password)

        if(!validateUser){
            return res.status(400).send({message: "Incorrect password"})
        }

        const userId = {
            id: user._id,
            email: user.email
        }
        const token = jwt.sign(userId, process.env.SECRET_TOKEN, {expiresIn: '1h'} )
       
        return res.status(200).send({message: "Login successful!", token})

    }catch(error){
        res.send(error)
    }
}


module.exports = {addUser, userLogin}
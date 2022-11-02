const User = require('../models/userModel')

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
    
    catch (err) {
        next(err)
    }

}

module.exports = {addUser}
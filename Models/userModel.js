const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    first_name: {type: String, required: [true, 'Enter your first_name']},
    last_name: {type: String, required: [true, 'Enter your last_name']},
    username: {type: String, required: [true], unique: [true]},
    email: {type: String, required: [true], unique: [true]},
    password: {type: String, required: [true, 'Enter your password']},
    user_type: {type: String, require: true, enum: ['admin', 'user']},
})
//Hash password and save
UserSchema.pre('save', async function(){
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
})


// Verify user inputted password
UserSchema.methods.passwordIsValid = function (password) {
    const passwordHash = this.password
    return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
        if (err) {
          return reject(err)
        }
        resolve(same)
        })
    })
}
  
UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject.__v
      delete returnedObject.password
    },
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    first_name: {type: String, required: [true, 'Enter your first_name']},
    last_name: {type: String, required: [true, 'Enter your last_name']},
    password: {type: String, required: [true, 'Enter your password']},
    user_type: {type: String, require: true, enum: ['admin', 'user']},
    createdAt: Date
})

UserSchema.pre('save', async function(){
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
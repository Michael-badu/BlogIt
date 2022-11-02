const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema = new Schema({
    title: {type: String, required: [true, 'Enter blog title'], unique: true},
    description: {type: String, required: [true, 'Enter a short description'], unique: true},
    author: {type: String, required: true, ref: "User"},
    createdAt: Date,
    state: {type: String, require: true, default: 'draft', enum: ['draft', 'published']},
    readCount: {type: Number, default: 0},
    reading_time: {type: Number},
    body: {type: String},
    tag: {type: String},
    timestamps: true
})


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
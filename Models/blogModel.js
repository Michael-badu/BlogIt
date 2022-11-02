const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const blogSchema = new Schema({
    title: {type: String, required: [true, 'Enter blog title']},
    description: {type: String, required: [true, 'Enter a short description']},
    tags: {type: String, required: [true]},
    author: {type: String, required: [true, 'Enter the name of blog author']},
    createdAt: Date,
    state: {type: String, require: true, enum: ['draft', 'published']},
    readCount: {type: Number, default: 0},
    reading_time: ,
    body: {type: String, required: [true]}
})


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
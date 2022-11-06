const express = require('express');
const blogRoute = express.Router();
const authenticateUser = require('./Middleware/authenticateUser');
const {createBlog, getBlogById, updateBlogById, deleteBlogById, blogByUser} = require('../Controller/blog');

blogRoute.post('/create', authenticateUser, createBlog);
blogRoute.get('/get/:id', getBlogById);
blogRoute.put('/update/:id', authenticateUser, updateBlogById);
blogRoute.delete('/delete/:id', authenticateUser, deleteBlogById);
blogRoute.get('/userblog', authenticateUser, blogByUser)


module.exports = {blogRoute};
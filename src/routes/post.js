//Imports
const express = require('express');
const router = express.Router();
const createPost = require('../controllers/post');

//Create ROuter
router.post('/', createPost)


module.exports = router;

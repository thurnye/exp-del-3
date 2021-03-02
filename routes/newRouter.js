const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');


router.get('/add-album', addController.getAddAlbum);
router.post('/add-album', addController.postAddAlbum);






module.exports = router;
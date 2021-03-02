const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controllers');

/* GET home page. */
router.get('/', Controller.getIndex);


router.get('/albums', Controller.getAlbums);


router.get('/albums/a:id', Controller.getOneAlbum);


router.get('/albums/t:id/:name', Controller.getOneAlbumDetails);






module.exports = router;

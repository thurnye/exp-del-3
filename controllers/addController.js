const { request } = require('express');
const Albums = require('../model/albumModel');


exports.getAddAlbum = (req, res) => {
    res.render('add',{
        pageTitle: 'Add Album'
    })
}

exports.postAddAlbum = (req, res) => {
    console.log(req.body)
    let id = Albums.albumsArray.length + 1
    const albumName = req.body.albumName;
    const artist = req.body.artist;
    const imageUrl = req.body.imageUrl;
    const song = req.body.song;

    const album = {
        id: id,
        name : albumName,
        artist: artist,
        images: imageUrl,
        tracks: [{
            id: id,
            name: song
        }];
    }
   Albums.albumsArray.push(album);
    res.redirect('/albums');
}
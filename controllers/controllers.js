const { request } = require('express');
const Albums = require('../model/albumModel');



exports.getIndex = (req, res, next) => {
    res.render('index', { title: 'Express' });
};


exports.getAlbums = (req, res, next) =>{
    let albums = Albums.getAll();
  
    res.render('albums', { 
      pageTitle: 'Express',
      albums: albums 
    });
}


exports.getOneAlbum = (req, res, next) =>{
    let id = req.params.id;
    // console.log(req)
    // console.log(Albums.getOne(id))
    res.render('singleAlbum', {
      pageTitle: 'Album',
      album: Albums.getOne(id)
    })
    
  }
exports.getOneAlbumDetails = (req, res, next) =>{
    // console.log(req.params.id,req.params.tid)
    
    Albums.getAtIndex(req.params.id, req.params.tid);
    // console.log(Albums.getAtIndex(req.params.id,req.params.tid))
    res.render('song',{
        pageTitle : 'Song Details',
        song: Albums.getAtIndex(req.params.id, req.params.tid)
    })
    
}


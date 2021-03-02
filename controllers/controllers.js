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
    console.log(Albums.getOne(id))
    res.render('singleAlbum', {
      pageTitle: 'Album',
      album: Albums.getOne(id)
    })
    
  }
exports.getOneAlbumDetails = (req, res, next) =>{

 
    
}


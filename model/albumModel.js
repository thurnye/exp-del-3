const albumsArray = [
    {id: 000, name: "Thriller", 
    artist: "Michael Jackson", 
    image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png", tracks: [{id: 't0', name: "Wanna Be Startin' Somethin"}]},

    {id: 001, name: "Baby One More Time", artist: "Britney Spears", image: "https://upload.wikimedia.org/wikipedia/en/e/ec/...Baby_One_More_Time_Single.png", tracks: [{id: 't1', name: "You Drive Me Crazy"}]},

    {id: 002, name: "Ladies' Night", artist: "Kool & the Gang", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Kool_and_the_Gang_Ladies_Night.jpg/220px-Kool_and_the_Gang_Ladies_Night.jpg",tracks: [{id: 't2', name: "Got You Into My Life"}]}

  ]


module.exports = {
    getAll:  () => {
        return albumsArray
    },
    getOne: (id) => {
        return albumsArray.find(el => el.id == id)
    },
    
};


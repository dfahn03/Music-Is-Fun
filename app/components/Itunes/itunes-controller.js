import ItunesService from "./itunes-service.js";
//Private
let itunesService = new ItunesService()

function _drawSongs() {
  let songs = itunesService.Songs
  let template = ''
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    template += song.Template
  }
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'FIND MY JAM'
  console.log(itunesService.Songs)
  document.querySelector('#songs').innerHTML = template
}




//PUBLIC
class ItunesController {
  constructor() {
    _drawSongs()
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', _drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING YOUR JAM....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController
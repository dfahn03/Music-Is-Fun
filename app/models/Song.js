export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `
        <div class="card card-columns text-white border-primary">
            <img src="${this.albumArt}" class="card-img-top" alt="Album Art">
            <div class="card-body">
                <h5 class="card-title">Title: ${this.title}</h5>
                <p small class="card-text">Artist: ${this.artist}</p>
                <p small class="card-text">Album: ${this.collection}</p>
                <p small class="card-text">Price: ${this.price}</p>
                
            </div>
        </div>
        `
    }
}
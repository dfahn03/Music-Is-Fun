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
        <div class="card">
            <img src="${this.albumArt}" class="card-img-top" alt="Album Art" id="album-art">
            <div class="card-body">
                <h5 class="card-title">Song Name: ${this.title}</h5>
                <p class="card-text">Artist: ${this.artist}</p>
                <p class="card-text">Collection Name: ${this.collection}</p>
                <p class="card-text">Price: ${this.price}</p>
                <p class="card-text">${this.preview}</p>
            </div>
        </div>
        `
    }
}
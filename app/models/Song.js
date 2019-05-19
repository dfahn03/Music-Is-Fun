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
        <div class="col-sm-6 card" style="width: 18em">
            <img src="${this.albumArt}" class="card-img-top" alt="Album Art">
            <div class="card-body">
                <h6 class="card-title mb-1"><b>Title: ${this.title}</b></h6>
                <p small class="card-text mb-1"><b>Artist: ${this.artist}</b></p>
                <p small class="card-text mt-1 mb-1"><b>Album: ${this.collection}</b></p>
                <p small class="card-text mt-1 mb-1"><b>Price: ${this.price}</b></p>
                <audio controls loop id="audio" class="audio-tag p-0">
                    <source src="${this.preview}" type="audio/mpeg">
                </audio>
            </div>
        </div>
        `
    }
}
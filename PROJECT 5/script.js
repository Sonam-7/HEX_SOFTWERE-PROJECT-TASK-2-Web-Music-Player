const playlistElement = document.getElementById("playlist");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const volume = document.getElementById("volume");
const progress = document.getElementById("progress");

// 🎵 Local songs
const songs = [
    {
        // title: "Song 1",
        // artist: "Artist 1",
        title: "akdantay vkrtunday",
         artist: "shankar mahadevan",
         src: "songs/song6.mp3",
        cover: "cover images/cover1.jpg"
    },
    {
        title: "gan gan patay nmo nmha",
        artist: "anuradha paudhval",
        src: "songs/song7.mp3",
        cover: "cover images/cover2.jpg"
    },
    {
        title: "mhalakshmi song",
        artist: "sweta nayak",
        src: "songs/song8.mp3",
        cover: "cover images/cover3.jpg"
    },

];

let currentSongIndex = 0;
let isPlaying = false;

// create Playlist 
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener("click", () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
    });
    playlistElement.appendChild(li);
});

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    cover.src = song.cover;
    title.textContent = song.title;
    artist.textContent = song.artist;
    progress.value = 0;
}

function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸️";
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong(currentSongIndex);

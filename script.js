console.log("Welcome To Spotify")
// Initialise the variables
let SongIndex = 0;
let audioElement = new Audio(bollywood_Simran 2017-MediaMetadata.mp3);
let masterPlay = documentElementById('masterPlay');
let myProgressBar = documentElementById('myProgressBar');
let gif = documentElementById('gif');

let Song = [
    {SongName: "Pal - jalebi-Arijit singh.mp3", filepath: "Songs/1.mp3", CoverPath: "Covers/1.jpg"}
    {SongName: "Samjhawan-Humpty sharm ki Dulhania.mp3", filepath: "Songs/2.mp3", CoverPath: "Covers/2.jpg"}
    {SongName: "320kbps_Dilwale 2015-Janam Janam.mp3", filepath: "Songs/3.mp3", CoverPath: "Covers/3.jpg"}
    {SongName: "Agar-Tum-Sath-Ho_192.mp3", filepath: "Songs/4.mp3", CoverPath: "Covers/4.jpg"}
    {SongName: "bollywood_MsDhoni-phor kabhi.mp3", filepath: "Songs/5.mp3", CoverPath: "Covers/5.jpg"}
    {SongName: "bollywood_Simran 2017-Meet.mp3", filepath: "Songs/6.mp3", CoverPath: "Covers/6.jpg"}
    {SongName: "bollywood_YJHD 2013-ilahi.mp3", filepath: "Songs/7.mp3", CoverPath: "Covers/7.jpg"}
    {SongName: "Kabhi jo Badal Barse - Arijit Singh-320kbps.mp3", filepath: "Songs/8.mp3", CoverPath: "Covers/8.jpg"}
    {SongName: "new_192_01-Ghungroo-war(2019).mp3", filepath: "Songs/9.mp3", CoverPath: "Covers/9.jpg"}
]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdates', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.Value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement;
})
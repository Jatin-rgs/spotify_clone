console.log("welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "salam-e-Ishq",filePath: "songs/1.mp3",coverPath: "cover.jpg"},
    {songName: "salam",filePath: "songs/2.mp3",coverPath: "2.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/3.mp3",coverPath: "3.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "4.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "5.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "6.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "7.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "3.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "4.jpeg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "2.jpeg"},
]
 songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
 });
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
       masterPlay.classList.add('fa-play');
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*1000);
   // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 });

document.getElementsByClassName('songItemPlay').forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e);
    });
});



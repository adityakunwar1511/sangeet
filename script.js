console.log("Welcome to Sangeet");
// variable initialize
let songindex=0;
let audioelement=new Audio('0.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"Shiv Tandav" ,filepath:"0.mp3", coverpath:"cover1.png"},
    {songname:"Despacito" ,filepath:"1.mp3", coverpath:"cover2.png"},
    {songname:"Bulleya" ,filepath:"2.mp3", coverpath:"cover3.png"},
    {songname:"Mother BGM" ,filepath:"3.mp3", coverpath:"cover4.png"},
    {songname:"KGF BGM" ,filepath:"4.mp3", coverpath:"cover5.png"},
    {songname:"Let Me Love You" ,filepath:"5.mp3", coverpath:"cover6.png"}
]
//handle play pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    }
   else{
    audioelement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;

   }
})




// listen to events
audioelement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
});
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    gif.style.opacity=0;

    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeallplays();
songindex=parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
gif.style.opacity=1;
audioelement.src=`${songindex}.mp3`;
mastersongname.innerText=songs[songindex].songname;

audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
gif.style.opacity=1;
})
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songname;

audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
gif.style.opacity=1;
  
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;

    }
    else{
        songindex-=1;
    }
    audioelement.src=`${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
gif.style.opacity=1;
  
})

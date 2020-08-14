const play=document.getElementById('play');
const stop=document.getElementById('stop');
const timestamp=document.getElementById('timestamp');
const progress=document.getElementById('progress');
const video=document.getElementById('video');

function addtoggleAction()
{
  if(video.paused)
  {
    video.play();
  }
  else{
    video.pause();
  }
}

function updatePlay()
{
  if(video.paused)
  {
    play.innerHTML='<i class="fa fa-play fa-2x"></i>';
  }
  else{
    play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
  }
}

function stopVedio()
{
  video.currentTime=0;
  video.paused;
}


function updateProgress()
{
  progress.value=(video.currentTime/video.duration)*100;
  let min=Math.floor(video.currentTime/60);
  if(min<10)
  {
    min='0'+String(min);
  }

  let sec=Math.floor(video.currentTime%60);
  if(sec<10)
  {
    sec='0'+String(sec);
  }
  timestamp.textContent=`${min}:${sec}`;
}

function SetVideoprogress()
{
  video.currentTime=(progress.value * video.duration)/100;
  
  
}

video.addEventListener('click',addtoggleAction);
 video.addEventListener('play',updatePlay);
 video.addEventListener('pause',updatePlay);
 video.addEventListener('timeupdate',updateProgress);

 play.addEventListener('click',addtoggleAction);

 stop.addEventListener('click',stopVedio);

 progress.addEventListener('change',SetVideoprogress);
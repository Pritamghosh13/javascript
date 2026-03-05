const btn = document.querySelector(".btn")
const video = document.querySelector(".video")

btn.addEventListener("click", ()=>{
    if(video.paused){
        video.play()
        btn.innerText = "Pause"
    }
    else{
        video.pause()
        btn.innerText = "Play"
    }
})
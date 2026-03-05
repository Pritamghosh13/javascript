const button_next = document.querySelector(".nav.next")

const button_prev = document.querySelector(".nav.prev")

const slide = document.querySelector(".slides")
const imgNum = document.querySelectorAll("img")

let auto;

let chnagePic = 1;
button_next.addEventListener("click", ()=>{
    chnagePic++
    updateImg()
    clearInterval(auto)
})

button_prev.addEventListener("click",()=>{
    chnagePic--
    updateImg()
    clearInterval(auto)
})



function updateImg(){
    if(chnagePic>imgNum.length){
        chnagePic = 1;
    }
    else if(chnagePic<1){
        chnagePic = imgNum.length
    }
    slide.style.transform = `translateX(-${(chnagePic - 1) * 750}px)`
}
auto = setInterval(()=>{
    chnagePic++
    updateImg()
}, 1000)
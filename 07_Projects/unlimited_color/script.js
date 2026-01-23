//genreate a random color.
let color;
const randomColor = function (){
    const hex = "0123456789ABCDEF"
    color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor((Math.random())*16)] 
    }
    return color;
};

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const heading = document.querySelector('h1')

let interVal;

start.addEventListener("click", function(){
    interVal = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
        heading.style.color = randomColor()
    },1000)
})

stop.addEventListener('click',function(){
    clearInterval(interVal)
    interVal = null
})


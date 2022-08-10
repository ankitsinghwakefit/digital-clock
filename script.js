function time(){
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()
    if(hour<10){
        hour = "0"+hour
    }
    if(min<10){
        min = "0"+min
    }
    if(sec<10){
        sec = "0"+sec
    }

    document.getElementById("hour").innerText = hour
    document.getElementById("min").innerText = min
    document.getElementById("sec").innerText = sec
}

time()
setInterval(time,1000)

console.log(new Date())
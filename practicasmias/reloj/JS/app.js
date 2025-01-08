function updateClock(){
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    //Aplico formato de dos digitos para horas, minutos y segundos.
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    //Mostrar la hora en el div con ids 'clock'

    const timeString = `${hours}:${minutes}:${seconds}`
    document.getElementById('clock').textContent = timeString
}

setInterval(updateClock, 1000)
updateClock()
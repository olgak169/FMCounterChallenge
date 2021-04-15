
var futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 14);

let counter = setInterval(() => {
    let now = new Date().getTime();
    let countDown = futureDate - now


    let days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000)

    
    let daysElem = document.getElementById('days')
    let hoursElem = document.getElementById('hours')
    let minutesElem = document.getElementById('minutes')
    let secondsElem = document.getElementById('seconds')


    changeTime(secondsElem, seconds)
    changeTime(minutesElem, minutes)
    changeTime(hoursElem, hours)
    changeTime(daysElem, days)


    function getZeros(num) {
        return num < 10 ? num = '0' + num : num;
    }

    function changeTime(elem, currentTime) {
        let prevTime = elem.children[0].attributes[1].value
        
        if (currentTime != prevTime) {

        elem.children[0].setAttribute('data-current', getZeros(currentTime))
        elem.children[1].innerHTML = getZeros(currentTime)
        elem.children[2].setAttribute('data-current', getZeros(currentTime))

        elem.classList.add('turn')
        elem.children[0].setAttribute('data-num', getZeros(currentTime))
        
        setTimeout(() => {
            elem.classList.remove('turn')
        }, 600);
    }
    }

    if (countDown <= 0) {
        clearInterval(counter)
        document.querySelector('h1').innerHTML = "We're Live!"
    }

}, 1000);


let homecount = 0
let guestcount = 0

let homeScore = document.getElementById("home-score") 
let guestScore = document.getElementById("guest-score")

function hplusone() {
    homecount += 1
    homeScore.innerText = homecount
}

function hplustwo() {
    homecount += 2
    homeScore.innerText = homecount
}

function hplusthree() {
    homecount += 3
    homeScore.innerText = homecount
}

function gplusone () {
    guestcount += 1
    console.log(guestcount)
}

function gplustwo () {
    guestcount += 2
    console.log(guestcount)
}

function gplusthree () {
    guestcount += 3
    console.log(guestcount)
}
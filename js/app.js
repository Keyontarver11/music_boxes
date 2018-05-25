//select your elements or define the variables
var keys = document.querySelectorAll(".key");
var notes = {
    cKey: document.querySelector('#cAudio'),
    dKey: document.querySelector('#dAudio'),
    eKey: document.querySelector('#eAudio'),
    fKey: document.querySelector('#fAudio'),
    gKey: document.querySelector('#gAudio'),
    aKey: document.querySelector('#aAudio'),
    bKey: document.querySelector('#bAudio')

}









//define your functions
function playNote(key) {
    notes[key].currentTime = 0
    notes[key].play()
}





//call your functions and/or add event listeners

keys.forEach(function (key) {
    key.addEventListener('click', function () {
        playNote(key.id)
    })
});

document.addEventListener('keydown', function (event) {

    if (event.key === "a") {
        playNote("cKey")
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === "s") {
        playNote("dKey")
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === "d") {
        playNote("eKey")
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === "f") {
        playNote("fKey")
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === "g") {
        playNote("gKey")
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === "h") {
        playNote("aKey")
    }
})
document.addEventListener('keydown', function (event) {
    if (event.key === "j") {
        playNote("bKey")
    }
})
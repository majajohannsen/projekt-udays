"use strict";

function mytoggle() {
    document.getElementById("sidebar").classList.toggle('active');
}
fetch("https://dawa.aws.dk/postnumre")
    .then(function (data) {
        return data.json();
    })
    .then(function (JSON) {
        console.log(JSON[0])
        for (let i = 0; i < JSON.length; i++) {
            document.getElementById("pbliste").insertAdjacentHTML('afterbegin', "<option>" + JSON[i].nr + " " + JSON[i].navn + "<option>");
        }
    })

const lydobjektet = new Audio("audioclip.mp4");


document.getElementById("playBut").addEventListener("click", function () {
    lydobjektet.play();

});

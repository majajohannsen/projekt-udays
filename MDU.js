// Hovedprogram
antalValgt = 0;
let interesseListe = [];
document.getElementById("Oekonomi").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("Oekonomi").classList.add("valgt");
        interesseListe[antalValgt] = "Økonomi";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("IT").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("IT").classList.add("valgt");
        interesseListe[antalValgt] = "IT";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("salg").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("salg").classList.add("valgt");
        interesseListe[antalValgt] = "Salg";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("design").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("design").classList.add("valgt");
        interesseListe[antalValgt] = "Design";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("miljoe").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("miljoe").classList.add("valgt");
        interesseListe[antalValgt] = "Miljø";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("markedsfoering").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("markedsfoering").classList.add("valgt");
        interesseListe[antalValgt] = "Markedsføring";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("innovation").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("innovation").classList.add("valgt");
        interesseListe[antalValgt] = "Innovation";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("optimering").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("optimering").classList.add("valgt");
        interesseListe[antalValgt] = "Optimering";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("kreativ").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("kreativ").classList.add("valgt");
        interesseListe[antalValgt] = "Kreativ";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("udvikling").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("udvikling").classList.add("valgt");
        interesseListe[antalValgt] = "Udvikling";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("programmer").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("programmer").classList.add("valgt");
        interesseListe[antalValgt] = "Programmer";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("natur").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("natur").classList.add("valgt");
        interesseListe[antalValgt] = "Natur";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("samfund").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("samfund").classList.add("valgt");
        interesseListe[antalValgt] = "Samfund";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("kommunikation").addEventListener("click", function () {
    if (antalValgt < 3) {
        document.getElementById("kommunikation").classList.add("valgt");
        interesseListe[antalValgt] = "Kommunikation";
        antalValgt++;
    } else {
        alert("Du kan kun vælge 3 interesser");
    }
})
document.getElementById("fortsaet").addEventListener("click", function (e) {
    console.log(antalValgt);
    if (antalValgt === 3) {
        if (interesseListe.includes("Økonomi") && interesseListe.includes("Salg")) {
            location.href = "markedsfoering.html";
        } else if (interesseListe.includes("IT") && interesseListe.includes("Design")) {
            location.href = "multimedie.html";
        }
    } else {
        alert("Du skal vælge 3 interesser!");
    }
})
document.getElementById("fortsaet").addEventListener("click", function (e) {
    console.log(antalValgt);
    if (antalValgt === 3) {
        if (interesseListe.includes("IT") && interesseListe.includes("Økonomi")) {
            location.href = "oekonomiogit";
        } else if (interesseListe.includes("Kreativ") && interesseListe.includes("Kommunikation")) {
            location.href = "multimedie.html";
        }
    } else {
        alert("Du skal vælge 3 interesser!");
    }
})
document.getElementById("fortsaet").addEventListener("click", function (e) {
    console.log(antalValgt);
    if (antalValgt === 3) {
        if (interesseListe.includes("Innovation") && interesseListe.includes("Salg")) {
            location.href = "markedsfoering.html";
        } else if (interesseListe.includes("Optimering") && interesseListe.includes("Programmer")) {
            location.href = "multimedie.html";
        }
    } else {
        alert("Du skal vælge 3 interesser!");
    }
})
document.getElementById("fortsaet").addEventListener("click", function (e) {
    console.log(antalValgt);
    if (antalValgt === 3) {
        if (interesseListe.includes("Design") && interesseListe.includes("Kommunikation")) {
            location.href = "multimedie.html";
        } else if (interesseListe.includes("Programmer") && interesseListe.includes("IT")) {
            location.href = "markedsfoering.html";
        }
    } else {
        alert("Du skal vælge 3 interesser!");
    }
})
document.getElementById("fortsaet").addEventListener("click", function (e) {
    console.log(antalValgt);
    if (antalValgt === 3) {
        if (interesseListe.includes("Samfund") && interesseListe.includes("Salg")) {
            location.href = "markedsfoering.html";
        } else if (interesseListe.includes("Samfund") && interesseListe.includes("IT")) {
            location.href = "oekonomiogit.html";
        }
    } else {
        alert("Du skal vælge 3 interesser!");
    }
})
document.getElementById("fortsaet").addEventListener("click", function (e) {
    console.log(antalValgt);
    if (antalValgt === 3) {
        if (interesseListe.includes("Optimering") && interesseListe.includes("IT")) {
            location.href = "oekonomiogit.html";
        } else if (interesseListe.includes("Innovation") && interesseListe.includes("Kreativ")) {
            location.href = "multimedie.html";
        }
    } else {
        alert("Du skal vælge 3 interesser!");
    }
});

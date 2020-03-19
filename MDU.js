   // Hovedprogram
   antalValgt = 0;
   let interesseListe = [];

   document.getElementById("Oekonomi").addEventListener("click", function () {
       if (antalValgt < 3) {
           document.getElementById("Oekonomi").classList.add("valgt");
           interesseListe[antalValgt] = "økonomi";
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
           interesseListe[antalValgt] = "salg";
           antalValgt++;
       } else {
           alert("Du kan kun vælge 3 interesser");
       }
   })

   document.getElementById("design").addEventListener("click", function () {
       if (antalValgt < 3) {
           document.getElementById("design").classList.add("valgt");
           interesseListe[antalValgt] = "design";
           antalValgt++;
       } else {
           alert("Du kan kun vælge 3 interesser");
       }
   })

   document.getElementById("fortsaet").addEventListener("click", function (e) {
       console.log(antalValgt);
       if (antalValgt === 3) {
           if (interesseListe.includes("økonomi") && interesseListe.includes("salg")) {
               location.href = "markedsf.html";
           } else if (interesseListe.includes("IT") && interesseListe.includes("design")) {
               location.href = "mdu.html";
           }
       } else {
           alert("Du skal vælge 3 interesser!");
       }
   })

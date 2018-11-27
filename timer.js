var ElementHtmlSeconde = document.getElementById("timerSeconde");
var ElementHtmlMinute = document.getElementById("timerMinute");

function decompterSeconde() {    
    var compteurSeconde = Number(ElementHtmlSeconde.textContent);
    var compteurMinute = Number(ElementHtmlMinute.textContent);
    
    if (compteurSeconde>0) {
        ElementHtmlSeconde.textContent= compteurSeconde-1;
    } else {
        if(compteurSeconde===0) {
            ElementHtmlSeconde.textContent= compteurSeconde+59;
            ElementHtmlMinute.textContent= compteurMinute-1;
        } 
    }
    
    if(compteurMinute===0 && compteurSeconde===0) {
                        clearInterval(setCompteur);
                        var reservation= document.getElementById("reservation");
                        reservation.textContent= "Votre réservation a expirée."
};

var setCompteur= setInterval(decompterSeconde,1000);
  
    
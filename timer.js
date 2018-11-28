var elementHtmlSeconde = document.getElementById("timerSeconde");
var elementHtmlMinute = document.getElementById("timerMinute");
var reservation= document.getElementById("reservation");


 function decompterSeconde() {    
    var compteurSeconde = Number(elementHtmlSeconde.textContent);
    var compteurMinute = Number(elementHtmlMinute.textContent);
    
    if (compteurSeconde>0) {
        elementHtmlSeconde.textContent= compteurSeconde-1;
    } else {
        if(compteurSeconde===0) {
            elementHtmlSeconde.textContent= compteurSeconde+59;
            elementHtmlMinute.textContent= compteurMinute-1;
        } 
    };
    
    if(compteurMinute===0 && compteurSeconde===0) {
                        clearInterval(setCompteur);
                        reservation.textContent= "Votre réservation a expirée."
    };
 };


 var setCompteur= setInterval(decompterSeconde,1000);


   
    
 
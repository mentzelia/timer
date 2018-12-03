var Timer = {
    elementHtmlSeconde: null,
    elementHtmlMinute: null,
    reservation: null,
    
    init: function(elementHtmlSeconde, elementHtmlMinute, reservation) {
        this.elementHtmlSeconde = elementHtmlSeconde;
        this.elementHtmlMinute = elementHtmlMinute;
        this.reservation = reservation;  
        
        this.decompterSeconde();
        this.intervalRecurrent();
        
    },
    
    decompterSeconde: function() {
        var compteurSeconde = Number(this.elementHtmlSeconde.textContent);
        var compteurMinute = Number(this.elementHtmlMinute.textContent);
    
        if (compteurSeconde>0) {
            this.elementHtmlSeconde.textContent= compteurSeconde-1;
        } else {
            if(compteurSeconde===0) {
                this.elementHtmlSeconde.textContent= compteurSeconde+59;
                this.elementHtmlMinute.textContent= compteurMinute-1;
            } 
        };

        if(compteurMinute===0 && compteurSeconde===0) {
                            clearInterval(setInterval(decompterSeconde,1000));
                            this.reservation.textContent= "Votre réservation a expirée."
        };
    },
    
    intervalRecurrent: function() {
        setInterval(this.decompterSeconde, 1000);
    },
    
    
};


//Creation objet
var elementHtmlSeconde = document.getElementById("timerSeconde");
var elementHtmlMinute = document.getElementById("timerMinute");
var reservation= document.getElementById("reservation");

var timer1 = Object.create(Timer);
timer1.init(elementHtmlSeconde, elementHtmlMinute, reservation);
 


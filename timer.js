//Objet reservation
var Reservation= {
    init: function(elementHtmlSection) {
        this.elementHtmlSection = elementHtmlSection;
        this.ajoutElement();
    },

    ajoutElement: function() {
        var New = document.createElement("p");
        New.id = "reservation";
        New.textContent = "Votre réservation expire dans ";
        this.elementHtmlSection.appendChild(New);
    },
} ;

//Creation objet
var elementHtmlSection = document.getElementById("timer"); 
var reservation1 = Object.create(Reservation);
reservation1.init(elementHtmlSection);
                                             




                                          
//Objet timer
var Timer = {    
    init: function() {
        this.elementHtmlP = elementHtmlP;
        this.elementHtmlSeconde = elementHtmlSeconde;
        this.elementHtmlMinute = elementHtmlMinute;
        
        
        this.ajoutMinuteDom();
        this.ajoutSecondeDom();
        this.decompterSeconde();
        this.intervalRecurrent();
        
    },
    
    ajoutMinuteDom: function() {
        var New = document.createElement("span");
        New.id = "timerMinute";
        New.textContent = "20";
        this.elementHtmlP.appendChild(New);
        this.elementHtmlP.insertAdjacentHTML("beforeend", " minutes et ");
    },
    
    ajoutSecondeDom: function() {
        var New = document.createElement("span");
        New.id = "timerSeconde";
        New.textContent = "0";
        this.elementHtmlP.appendChild(New);
        this.elementHtmlP.insertAdjacentHTML("beforeend", " secondes.");
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
                            this.elementHtmlP.textContent= "Votre réservation a expirée."
        };
    },
    
    intervalRecurrent: function() {
        setInterval(this.decompterSeconde, 1000);
    },
    
    
};


//Creation objet

var elementHtmlP = document.getElementById("reservation");
var elementHtmlSeconde = document.getElementById("timerSeconde");
var elementHtmlMinute = document.getElementById("timerMinute");

var timer1 = Object.create(Timer);
timer1.init();




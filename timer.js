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
    init: function(minute, seconde) {
        
        
        this.ajoutMinuteDom(minute);
        this.ajoutSecondeDom(seconde);
        this.decompterSeconde();
        this.intervalRecurrent();
    },
    
    ajoutMinuteDom: function(minute) {
        var New = document.createElement("span");
        New.id = "timerMinute";
        New.textContent = minute;
        document.getElementById("reservation").appendChild(New);
        document.getElementById("reservation").insertAdjacentHTML("beforeend", " minutes et ");
    },
    
    ajoutSecondeDom: function(seconde) {
        var New = document.createElement("span");
        New.id = "timerSeconde";
        New.textContent = seconde;
        document.getElementById("reservation").appendChild(New);
        document.getElementById("reservation").insertAdjacentHTML("beforeend", " secondes.");
    },
    
    
    decompterSeconde: function() {
        var compteurSeconde = Number(document.getElementById("timerSeconde").textContent);
        var compteurMinute = Number(document.getElementById("timerMinute").textContent);
    
        if (compteurSeconde>0) {
            document.getElementById("timerSeconde").textContent = compteurSeconde-1;
        } else {
            if(compteurSeconde===0) {
                document.getElementById("timerSeconde").textContent= compteurSeconde+59;
                document.getElementById("timerMinute").textContent= compteurMinute-1;
            } 
        };

        if(compteurMinute===0 && compteurSeconde===0) {
                            clearInterval(setInterval(this.decompterSeconde, 1000));
                            document.getElementById("reservation").textContent= "Votre réservation a expirée."
        };
    },
    
    intervalRecurrent: function() {
        setInterval(this.decompterSeconde, 1000);
    },
    
    
};


//Creation objet

var timer1 = Object.create(Timer);
timer1.init(20, 0);




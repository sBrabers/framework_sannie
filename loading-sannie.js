
const LoadScreen = {

    loadScreenEl: document.getElementById("loadscreen"),
    spinnerEl: null,

    init() {
        this.checkAltBody();

        // bind methode this.endLoadscreen aan window.onload, zorg ervoor
        // dat het LoadScreen object als context wordt gezien
        // Ik heb een extra seconden toegevoegd voor pagina's die te snel geladen
        window.onload = () => {
            setTimeout(this.endLoadscreen.bind(this), 1000);                       
        };
    },

    checkAltBody() {
        // Als er gekozen is voor een eigen spinner oid, return false (sluit methode af)
        if (this.loadScreenEl.children.length) return false;
        let newSpinner = document.createElement("div");
        let altcolor = this.loadScreenEl.getAttribute("altcolor");

        newSpinner.id = "spinner";
        this.spinnerEl = newSpinner;

        // if (altcolor) {
        //     this.spinnerEl.style.borderTopColor = altcolor;
        // } else {
        //     this.spinnerEl.style.borderTopColor = "#f25a41";
        // }
        this.spinnerEl.style.borderTopColor = altcolor ? altcolor : "#f25a41";
        
        //overlay background color aanpassen
        this.loadScreenEl.style.background = "#a57bca"
        this.loadScreenEl.appendChild(this.spinnerEl);
        
    },

    endLoadscreen() {
        this.loadScreenEl.outerHTML = "";
        delete this.loadScreenEl;
    }
}

LoadScreen.init();

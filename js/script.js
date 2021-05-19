// Descrizione:
// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
// BONUS:
// Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
// Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).

var app = new Vue (
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    testo: "Fare la Spesa",
                    completed: false,
                },
                {
                    testo: "Portare a Passeggio i Cani",
                    completed: false,
                },
                {
                    testo: "Andare a Prendere Chiara al Lavoro",
                    completed: false,
                },
                {
                    testo: "Fare Allenamento",
                    completed: false,
                },
            ],
            newToDo: {
                testo:"",
                completed: false,
            },
        },
        methods: {
            removeToDo: function(indexToRemove) {
                // console.log("removeToDo", indexToRemove);
                this.toDoList.splice(indexToRemove, 1);
            },
            addToDo: function () {
                // console.log("chiamata alla funzione addToDo");
                if (this.newToDo.testo.trim().length > 0) {
                    this.toDoList.push(this.newToDo);
                }
                this.newToDo.testo = "";
            },
            keydownFunction: function (event) {
                // console.log(event.keyCode, event.key);
                if (event.keyCode == 13 && this.newToDo.trim().length > 0) {
                    this.addToDo();
                }
            },
        }
    }
);
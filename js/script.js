// Creare un oggetto studente
var studente = {
    nome : "Angelo",
    cognome : "Bennici",
    eta : 24
};

// Creare un ciclo for-in e stampare

for ( var key in studente) {
    console.log(studente[key]);
}

// Creare un array con oggetti studenti

var studenti = [
    {
        nome : "Matteo",
        cognome : "Bianchi",
        eta : 27
    },

    {
        nome : "Gabriele",
        cognome : "Rossi",
        eta : 29
    },

    {
        nome : "Antonio",
        cognome : "Verdi",
        eta : 31
    }
];



// Crere i 3 prompt chiedendo all'utente di inserire nome, cognome e eta del nuovo studente e pusharlo dentro l'array

var nuovoStudente = {
    nome : prompt("Inserisci il tuo nome"),
    cognome : prompt("Inserisci il tuo cognome"),
    eta : parseInt(prompt("Inserisci la tua età"))
};

studenti.push(nuovoStudente)

// Ciclo per stampare gli oggetti dentro l'array
for ( var i = 0 ; i < studenti.length ; i++) {
    console.log(studenti[i]);
};

var giocatore1 = Math.floor(Math.random() * 100) + 1;
var giocatore2 = Math.floor(Math.random() * 100) + 1;
var estrazione = Math.floor(Math.random() * 100) + 1;
console.log('Il giocatore 1 ha scelto ', giocatore1);
console.log('Il giocatore 2 ha scelto ', giocatore2);
console.log('Il numero estratto è: ', estrazione);
var numDiff1 = Math.abs(giocatore1 - estrazione);
var numDiff2 = Math.abs(giocatore2 - estrazione);
console.log(numDiff1);
console.log(numDiff2);
switch (true) {
    case giocatore1 === estrazione:
        console.log('Il giocatore 1 ha azzeccato il numero');
        break;
    case giocatore2 === estrazione:
        console.log('Il giocatore 2 ha azzeccato il numero');
        break;
    case numDiff1 < numDiff2:
        console.log('Nessun giocatore ha azzeccato il numero ma il giocatroe 1 si è avvicinato');
        break;
    case numDiff2 < numDiff1:
        console.log('Nessun giocatore ha azzeccato il numero ma il giocatroe 2 si è avvicinato');
        break;
}

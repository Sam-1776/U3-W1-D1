var btn = document.querySelector("form");
btn === null || btn === void 0 ? void 0 : btn.addEventListener('submit', function generate(e) {
    e.preventDefault();
    var estrazione = Math.floor(Math.random() * 100) + 1;
    console.log(estrazione);
    var p1 = document.getElementById("player1");
    console.log(p1 === null || p1 === void 0 ? void 0 : p1.value);
    var p2 = document.getElementById("player2");
    var pn1 = 0;
    var pn2 = 0;
    if (p1 != null && p2 != null) {
        pn1 = parseInt(p1 === null || p1 === void 0 ? void 0 : p1.value);
        pn2 = parseInt(p2 === null || p2 === void 0 ? void 0 : p2.value);
    }
    console.log(typeof pn1);
    var Diff1 = Math.abs(pn1 - estrazione);
    var Diff2 = Math.abs(pn2 - estrazione);
    var div = document.getElementById("estrazione");
    var p = document.createElement("p");
    p.innerHTML = "Il numero estratto \u00E8: ".concat(estrazione);
    div === null || div === void 0 ? void 0 : div.appendChild(p);
    var result = document.getElementById("risultato");
    var pR = document.createElement("p");
    switch (true) {
        case pn1 === estrazione:
            pR.innerHTML = 'Il giocatore 1 ha azzeccato il numero';
            result === null || result === void 0 ? void 0 : result.appendChild(pR);
            break;
        case pn2 === estrazione:
            pR.innerHTML = 'Il giocatore 2 ha azzeccato il numero';
            result === null || result === void 0 ? void 0 : result.appendChild(pR);
            break;
        case Diff1 < Diff2:
            pR.innerHTML = 'Nessun giocatore ha azzeccato il numero ma il giocatroe 1 si è avvicinato';
            result === null || result === void 0 ? void 0 : result.appendChild(pR);
            break;
        case Diff2 < Diff1:
            pR.innerHTML = 'Nessun giocatore ha azzeccato il numero ma il giocatroe 2 si è avvicinato';
            result === null || result === void 0 ? void 0 : result.appendChild(pR);
            break;
    }
});

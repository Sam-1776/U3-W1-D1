const btn = document.querySelector("form")


btn?.addEventListener('submit', function generate(e) {
    e.preventDefault()
    let estrazione: number = Math.floor(Math.random() * 100) + 1;
     console.log(estrazione);
     let p1 = document.getElementById("player1") as HTMLInputElement | null
     console.log(p1?.value);
     let p2 = document.getElementById("player2") as HTMLInputElement | null
     let pn1: number = 0
     let pn2: number = 0
     if (p1 != null && p2 != null) {
          pn1 = parseInt(p1?.value)
          pn2 = parseInt(p2?.value)
     }

     console.log(typeof pn1);
     

     let Diff1: number = Math.abs(pn1 - estrazione)
     let Diff2: number = Math.abs(pn2 - estrazione)
     
     const div = document.getElementById("estrazione")
     const p = document.createElement("p")
     p.innerHTML = `Il numero estratto è: ${estrazione}`;
     div?.appendChild(p)

     const result = document.getElementById("risultato")
     const pR = document.createElement("p")
     switch (true) {
        case pn1 === estrazione:
            pR.innerHTML = 'Il giocatore 1 ha azzeccato il numero';
            result?.appendChild(pR)
            break;
        case pn2 === estrazione:
            pR.innerHTML = 'Il giocatore 2 ha azzeccato il numero';
            result?.appendChild(pR)
            break;
        case Diff1 < Diff2:
            pR.innerHTML = 'Nessun giocatore ha azzeccato il numero ma il giocatroe 1 si è avvicinato';
            result?.appendChild(pR)
            break;
        case Diff2 < Diff1:
            pR.innerHTML = 'Nessun giocatore ha azzeccato il numero ma il giocatroe 2 si è avvicinato';
            result?.appendChild(pR)
            break;
    }
});
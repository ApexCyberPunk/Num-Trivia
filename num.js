
const getFactBtn = document.getElementById('gen-fact-btn')
const ranFactBtn = document.getElementById('ran-fact-btn')
const fact = document.querySelector('.fact')
let url = "http://numbersapi.com/"

// i for input ... p for parameter... e.g.(iNumP)

let fetchFact = (iNumP) => {
    let finalUrl = url + iNumP;
    fetch(finalUrl)
    .then(x => x.text())
    .then(y => {
        fact.innerHTML = `<h2>${iNumP}</h2>
        <p>${y}</p>
        
        `
        document.querySelector('.container').append(fact)
    })
}


fetchFact(18)





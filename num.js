
const getFactBtn = document.getElementById('gen-fact-btn')
const ranFactBtn = document.getElementById('ran-fact-btn')
const fact = document.querySelector('.fact')
let url = "http://numbersapi.com/"

let fetchFact = () => {
    let finalUrl = url;
    fetch(finalUrl)
    .then(x => x.text())
    .then(y => {
        console.log(y)
    })
}


fetchFact()





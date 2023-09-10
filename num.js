
const getFactBtn = document.getElementById('get-fact-btn')
const ranFactBtn = document.getElementById('ran-fact-btn')
const fact = document.querySelector('.fact')
let url = "http://numbersapi.com/"

// i for input ... p for parameter... e.g.(iNumP)

let fetchFact = (iNumP) => {
    let finalUrl = url + iNumP;
    fetch(finalUrl)
    .then(x => x.text())
    .then(y => {

        fact.style.display = "block"
        fact.innerHTML = `<h2>${iNumP}</h2>
        <p>${y}</p>
        
        `
        document.querySelector('.container').append(fact)
    })
}

let getFact = () => {

    let num = document.getElementById('num').value

    // check if input is empty or not


    if(num) {
        // check if number is 0 -300 if it is...
        if (num >=0 && num <= 300) {
            fetchFact(num);
        } else {
            fact.style.display =  "block";
            fact.innerHTML = `<p class="msg"> Need number 0 - 300</p>`
        }
    } else {
        fact.style.display = "block"
        fact.innerHTML = `<p class="msg">Input cant be empty</p>`
    }

}

let getRandomFact = () => {

    let rNum = Math.floor(Math.random() * 301);
    fetchFact(rNum)
}

ranFactBtn.addEventListener('click', getRandomFact)
getFactBtn.addEventListener('click', getFact)

window.addEventListener('load', getRandomFact)
// fetchFact(18)





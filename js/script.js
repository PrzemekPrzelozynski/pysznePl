// const mainBnt = document.getElementById('btnId');

// mainBnt.addEventListener("click", takeOrder);


// let order = {
//     pizza: '',
//     sosy: [],
//     name: '',
//     phone: '',
//     adress: '',
//     email: '',
//     notkaDlaKucharza: ''
// }
// const pomidorowy = document.getElementById('pomidorowy').checked
// const czosnkowy = document.getElementById('pomidorowy').checked
// const ostryPomidorowy = document.getElementById('pomidorowy').checked

// function takeOrder () {

//     sprawdzanieSosow("sosy")
//     // pobieram name
//     const nameC = document.getElementById('nameC').value
//     order.name = nameC
//     // pobieram phone
//     const phone = document.getElementById('phone').value
//     order.phone = phone
//     // pobieram adress
//     const adress = document.getElementById('adress').value
//     order.adress = adress
//     // pobieram maila
//     const mail = document.getElementById('mail').value
//     order.email = mail
//     // pobieram notke dla kucharza
//     const dlaKucharza = document.getElementById('dlakucharza').value
//     order.notkaDlaKucharza = dlaKucharza
//     // wyswietlam order na consoli
//     console.log(order)
// }

function sprawdzanieSosow(nazwaKlasy) {
    const pobraneWszystkieSosy = document.getElementsByClassName(nazwaKlasy)
    for(let i = 0; i < pobraneWszystkieSosy.length; i++) {
        order.sosy.push(pobraneWszystkieSosy[i].checked)
    }
}


const idBtn = document.getElementById('id-btn');
let order = {
    pizza: '',
    sosy: [],
    name: '',
    adress: '',
    email: '',
    tel: '',
    text: '',
    napoje: []
}
idBtn.addEventListener("click", takeOrder)
function sprawdzaniecheckBox(nazwaKlasy) {
    console.log(nazwaKlasy)
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    if (nazwaKlasy === "sosy") {
        for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
            order.sosy.push(pobraneWszytkieSosyZinputu[i].checked)
        }
    } else {
        for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
            order.napoje.push(pobraneWszytkieSosyZinputu[i].checked)
        }
    }
}
function takeOrder() {
    sprawdzaniecheckBox("sosy")
    sprawdzaniecheckBox("napoje")
    // pobieram imię i nazwisko z input 
    const nameC = document.getElementById('nameC').value
    order.name = nameC
    // pobieram email z input 
    const email = document.getElementById('email').value
    order.email = email
    // pobieram telefon z input 
    const tel = document.getElementById('tel').value
    order.tel = tel
    // pobieram adress
    const adress = document.getElementById('adress').value
    order.adress = adress
    // pobieram textarea 
    const msg = document.getElementById('msg').value
    order.text = msg
    console.log("takeOrder -> nameC", order)

    const pizzaSelect = document.getElementById("pizza").value
if(pizzaSelect == "0") {
    alert("wybierz pizze")
}
else{
    order.pizza = pizzaSelect
}
if(order.adress !== '' && order.email !== '' &&
order.name !== '' && order.napoje.length > 0 &&
order.sosy.length > 0 && order.tel !== '') {
    console.log(order)
}else{
    alert('Uzupelnij zamowienie')
}
order = {
    pizza: '',
    sosy: [],
    name: '',
    adress: '',
    email: '',
    tel: '',
    text: '',
    napoje: []
}
}
// function odejmowanie() {
//     console.log(1 == "1")
//     console.log(2 + "1")
//     let j = 152558
//     console.log(typeof j)
// }
// odejmowanie()
// function dodawanie(a, b) {
//     let wynik = a + b
//     console.log(wynik)
// }
// dodawanie(5, 15)
// dodawanie(2, 15)
// dodawanie(7, 1885)
// dodawanie(5, 88)
// dodawanie(7, 7)

// pobieranie selecta 


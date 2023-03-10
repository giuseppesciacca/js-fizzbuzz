/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

/*************** *******************/

//mi collego al dom
//ciclo for da 1 a 100 dove creo i quadrati
//all'interno del ciclo statement IF?

// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const ulEl = document.querySelector('ul');

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        let liEl = `<li> ${i} FizzBuzz </li>`;
        ulEl.insertAdjacentHTML("beforeend", liEl);
    } else if (i % 3 == 0) {
        let liEl = `<li> ${i} Fizz </li>`;
        ulEl.insertAdjacentHTML("beforeend", liEl);
    } else if (i % 5 == 0) {
        let liEl = `<li> ${i} Buzz </li>`;
        ulEl.insertAdjacentHTML("beforeend", liEl);
    } else {
        let liEl = `<li> ${i} </li>`;
        ulEl.insertAdjacentHTML("beforeend", liEl);
    }
};
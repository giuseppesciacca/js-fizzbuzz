/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

/*************** *******************/

//mi collego al dom
//ciclo for da 1 a 100 dove creo i quadrati
//all'interno del ciclo statement IF

const rowEl = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        const square = `<div class="square d-flex justify-content-center align-items-center bg_my_danger">
        <span>FizzBuzz</span>
        </div>`;
        rowEl.insertAdjacentHTML("beforeend", square);
    } else if (i % 3 == 0) {
        const square = `<div class="square d-flex justify-content-center align-items-center bg_my_success">
        <span>Fizz</span>
        </div>`;
        rowEl.insertAdjacentHTML("beforeend", square);
    } else if (i % 5 == 0) {
        const square = `<div class="square d-flex justify-content-center align-items-center bg_my_warning">
        <span>Buzz</span>
        </div>`;
        rowEl.insertAdjacentHTML("beforeend", square);
    } else {
        const square = `<div class="square d-flex justify-content-center align-items-center bg_my_light_primary">
        <span>${i}</span>
        </div>`;
        rowEl.insertAdjacentHTML("beforeend", square);
    }
};
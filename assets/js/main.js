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
    //creo sia il div.square sia uno span all'interno
    const square = document.createElement('div');
    square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
    const spanEl = document.createElement('span');

    //square base
    square.classList.add('bg_my_light_primary');
    spanEl.innerText = i;

    if ((i % 3 == 0) && (i % 5 == 0)) {
        square.classList.add('bg_my_danger');
        spanEl.innerText = 'FizzBuzz';
    } else if (i % 3 == 0) {
        square.classList.add('bg_my_success');
        spanEl.innerText = 'Fizz';
    } else if (i % 5 == 0) {
        square.classList.add('bg_my_warning');
        spanEl.innerText = 'Buzz';
    };
    rowEl.insertAdjacentElement("beforeend", square);
    square.insertAdjacentElement("beforeend", spanEl);
};
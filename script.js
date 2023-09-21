
let valorActual = '0';
let valorViejo = '';
let signo = '';

/* Valor de los botones que presionamos */
function press(value) {

    if (valorActual === '0' && value !== '.') {
        valorActual = '';
        valorActual += value;
    } else {
        valorActual += value;
    }
    updateDisplay();
}

/* Actualiza la pantalla de la calculadora */

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = valorActual;
}

/* Signo de el calculo */

function setOP(op) {
    signo = op;
    valorViejo = valorActual;
    valorActual = '0';
    updateDisplay();

}

/* Funcion para calcular */

function calculate() {
    let actual = parseFloat(valorActual)
    let viejo = parseFloat(valorViejo)
    val = parseFloat(valorActual)
    if (signo === '+') {


        console.log(actual + viejo)
    }

    if (valorViejo !== '' && signo !== '') { }
    switch (signo) {
        case '+':
            valorActual = (viejo + actual).toString();
            break;
        case '-':
            valorActual = (viejo - actual).toString();
            break;
        case '/':
            if (valorActual !== '0') {
                valorActual = (viejo / actual).toFixed(8);
            } else {
                valorActual = 'Error';
            }
            break;
        case '*':
            valorActual = (viejo * actual).toString();
            break;
    }
    valorViejo = '';
    signo = '';
    updateDisplay();
}

/* Funcion para limpiar la pantalla */
function clr() {
    valorActual = '0'
    updateDisplay();
    
}

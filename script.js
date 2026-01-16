let entrada = document.getElementById('entrada');    
function addToInput(valor) {    
    entrada.value += valor;    
}    
function clearEntry() {    
    entrada.value = '';    
}    
function deleteLast() {    
    entrada.value = entrada.value.slice(0, -1);    
}

function calculateResult() {
    try {

    entrada.value = eval(entrada.value);
    } catch (error) {
        entrada.value = 'Error';    
    }
}

function raizCuadrada() {
    try {
        let valor = parseFloat(entrada.value);
        if (valor < 0) {
            entrada.value = 'Error';
        } else if (String(valor) === "NaN") {
            entrada.value = 'Error';
        } else {
            entrada.value = Math.sqrt(valor);
        }
    } catch {
        entrada.value = 'Error';    
    }
}

// Support for keyboard events
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];

    if (allowedKeys.includes(key)) {
        addToInput(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearEntry();
    }
});
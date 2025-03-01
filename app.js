let numeroSecreto = 0;
let intentos = 0;
let listaDeNumero = [];	
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elentoHTML = document.querySelector(elemento);
    elentoHTML.innerHTML = texto ;  
    return; 
}

function verificacionIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1)? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor'); 
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumero);
    if (listaDeNumero.length === numeroMaximo){
        asignarTextoElemento('p', 'Se acabaron los intentos');
    }
    else {
        if (listaDeNumero.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaDeNumero.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales( ) {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();
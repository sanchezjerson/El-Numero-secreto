//let titulo = document.querySelector('h1');
//titulo.innerHTML = ' Juego del numero secreto'

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = ' indica un numero del 1 al 10';
let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// funcion del boton
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto ){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
   
}

function limpiarCaja(){
  //  let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value ='';
    document.querySelector('#valorUsuario').value = '';
}
 //funcion para numero aleatorio generado por la maquina
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;}
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}
 
function condicionesIniciales(){
    asignarTextoElemento('h1', ' juegue el numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);

    
    numeroSecreto =generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego (){
    //limpiar la caja
    limpiarCaja();
    //indicar  mensaje intervalo de numeros

    // generar el numero aleatorio
//numeroSecreto = generarNumeroSecreto();  
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

// todos los arreglos inician con posicion 0
//para eliminar el ultimo elemnto de una lista es variable.pop(); y para agregar variable.push();

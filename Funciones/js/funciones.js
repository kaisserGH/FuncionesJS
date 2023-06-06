// Sesion de funciones

/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

JS, cuando es ejecutado por el motor JS del navegador,
primero lee e interpreta las variables y las
funciones declaradas.

*/

// Funciones, declaracion, invocacion

//Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}


*/

/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/

// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
function nuevaFuncion(){
    console.log("Buenos días CH28");
}

nuevaFuncion();

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

//holaMundo("Fernando");
//console.log(holaMundo("Fernando"));

function nuevaFuncion(){
    console.log("Buenos días CH28");
}

/*
    Elaborar una funcion que calcule la velocidad de una objeto


    -velocidad = distancia/tiempo
    -function
    - calcularVelocidad
    (disnatcia, tiempo)
    -elaborar el bloque de codigo

*/

function calcularVelocidad(distancia, tiempo){ // Inicio
    let velocidad = distancia / tiempo;
    return "La velocidad calculada es: " + velocidad + " m/s";
} // Cierre

console.log(calcularVelocidad(30, 5));

//Funciones dentro de JS

/*
    Funciones flecha | Fat arrow | Funciones lambda

    Funciones anonimas
    Funciones CallBack - Funciones que reciben otas funciones como parámetros

    Promesas

    Funcionaes async - await
*/

// Funcion flecha para calcular la velocidad

const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
    console.log("Distancia =  " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}

// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

// Funcion general
function funcionNormal (parametro){
    return "Hola " + parametro;
}

// Funcion flecha - Arrow Function

//Funcion flecha más general
const funcionFlecha = parametro => "Hola " + parametro;

//Funciones flecha con más parámetros
const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB = " + datoC;
}

//Funciones flecha sin recibir un parámetro
const funcionSinParametros = () => {
    return "Funcion flecha que no recibe parametros";
}


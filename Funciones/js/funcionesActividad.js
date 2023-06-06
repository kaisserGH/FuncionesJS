/*
Realizar una función que realice o satisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.
*/ 

const cuadradoDeNumeroFlecha = numero =>  "El cuadrado de " + numero + " es: " + numero*numero;

function cuadradoDeNumeroNormal (numero) {
    return "El cuadrado de " + numero + " es: " + numero*numero;
}

/*
2. Escribir un código que convierta de grados celsius
a grados farenheit
*/

const celsiusAFarnheitFlecha = grado => grado + "° Celsius es igual a: " + ([grado *1.8 + 32]) + "° Farenheit"

function celsiusAFarnheitNormal (grado) {
    let f = (grado * 1.8) + 32;
    return grado + "° Celsius es igual a: " + f + "° Farenheit"
}

/*
3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.
*/

//V=Corriente*Resistencia

const voltajeFlecha = (corriente, resistencia) => "El voltaje es: " + corriente*resistencia + " voltios"

function voltajeNormal (corriente, resistencia) {
    let voltaje = corriente*resistencia;
    return "EL voltaje es: " + voltaje + " voltios";
}

/*
4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.
*/

//Volumen = lado ^3

const volumenCuboFlecha = lado => "El volumen del cubo es: " + lado*lado*lado;

function volumenCuboNormal (lado) {
    let volumen = lado*lado*lado;
    return "EL volumen del cubo es: " + volumen;
}

/*
5. Calcular el área de un triángulo
*/

//Area = (base * altura) / 2

const areaTrianguloFlecha = (base, altura) => "El área del triángulo es: " + (base*altura)/2;

function areaTrianguloNormal (base, altura) {
    let area = (base*altura)/2;
    return "El área del triángulo es: " + area;
} 
/*
6. Calcular el volumen de una esfera
*/

//V = 4/3 π r³

const volumenEsferaFlecha = radio => "El volumen de la esfera es: " + [4/3*(3.1416)*(r*r*r)]

function volumenEsferaNormal (radio) {
    let volumen = 4/3*(3.1416)*(r*r*r);
    return "EL volumen de la esfera es:" + volumen;
}

/*
7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
*/

const cadenaAMayusFlecha = cadena => "La cadena a mayúsculas queda: " + cadena.toUpperCase()

function cadenaAMayusNormal (cadena) {
    mayus = cadena.toUpperCase();
    return "La cadena a mayúsculas queda: " + mayus;
}
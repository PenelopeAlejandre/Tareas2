//Ejercicio 3 suma y mult

function introduceArreglo(array){
    const inicioAcumulador=0;
const sumaArray=array.reduce(  (acumulador, currentValue) => acumulador + currentValue, inicioAcumulador );
console.log("La suma de los elementos del arreglo es: " + sumaArray);
}

introduceArreglo([2,4,6,8]);

function introduceArreglo2(array){
const inicioAcum=1;
const multArray=array.reduce(  (acumulador, currentValue) => acumulador * currentValue, inicioAcum );
console.log("La multiplicación de los elementos del arreglo es: " + multArray);
}
introduceArreglo2([2,4,6,8]);

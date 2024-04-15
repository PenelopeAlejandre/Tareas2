let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. imprimir todas las personas de la lista
console.log("Las personas son: " + people);

// 2. remover Dani del arreglo
people.splice(people.indexOf("Dani"), 1);
console.log("Se remueve Dani y quedan: " + people);

// 3. remover Juan del arreglo
people.splice(people.indexOf("Juan"), 1);
console.log("Se remueve Juan y quedan: " + people);

// 4. Mover Luis al frente del arreglo
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
console.log("Moviendo a Luis al frente del arreglo:  " + people);

// 5. Mi nombre al final del arreglo
let myName = "Penny";
people.push(myName);
console.log("Añadiendo mi nombre: " + people);

// 6. iterar en el arreglo y despues de Maria, cerrar el loop usando break
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}

// 7. Dar el indice en el que se encuentra Maria
let indexOfMaria = people.indexOf("Maria");
console.log("Índice de Maria:", indexOfMaria);

//Verificar el arreglo final 
console.log("Arreglo final: " + people); 
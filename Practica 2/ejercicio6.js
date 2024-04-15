let salida=[1, 3, 5, 6, 12, 100]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar elementos si están en el orden incorrecto
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const entrada = [3, 6, 12, 5, 100, 1];
const salidaArr = bubbleSort(entrada);
console.log(salidaArr);
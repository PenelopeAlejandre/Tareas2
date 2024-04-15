document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    const guessDiv = document.getElementById('guess');
    const guessNumber = document.getElementById('guessNumber');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultText = document.getElementById('result');

    let lowerBound, upperBound;

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        guessDiv.style.display = 'block';
        lowerBound = 1;
        upperBound = 100;
        guessNumber.innerText = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    });

    yesButton.addEventListener('click', () => {
        resultText.innerText = `Tu número es el ${guessNumber.innerText}, ¡excelente decisión!`;
    });

    noButton.addEventListener('click', () => {
        let currentGuess = parseInt(guessNumber.innerText);
        // Si el intento anterior fue demasiado bajo, actualizamos el límite inferior
        // Si fue demasiado alto, actualizamos el límite superior
        if (currentGuess < parseInt(noButton.innerText)) {
            lowerBound = currentGuess + 1;
        } else {
            upperBound = currentGuess - 1;
        }
        // Calculamos el nuevo intento dividiendo el rango actual a la mitad
        let newGuess = Math.floor((lowerBound + upperBound) / 2);
        guessNumber.innerText = newGuess;
    });
});
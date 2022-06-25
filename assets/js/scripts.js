var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    currentNumber--;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
    currentNumberWrapper.innerHTML = currentNumber;
}
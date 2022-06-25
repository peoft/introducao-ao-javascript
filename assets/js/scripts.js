var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber;
    }        
}
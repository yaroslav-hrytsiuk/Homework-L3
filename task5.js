//Task 5

console.log('\n');

const numbers = document.getElementById('numbers'),
    checkTask = document.getElementById('checkTask'),
    result = document.getElementById('result');

function findMinNumber(numbersMass) {
    let minNumber = Math.min.apply(null, numbersMass);
    console.log(`Min number - ${minNumber}`);
}

function findIndexMaxNumber(numbersMass) {
    let maxNumber = numbersMass.indexOf(Math.max.apply(null, numbersMass));
    console.log('Sequence number of max element - ' + maxNumber);
}

function evenNum(numbersMass) {
    let evenNumbers = 0;
    let i = 0;
    while (i < numbersMass.length) {
        if (numbersMass[i] % 2 === 0) {
            evenNumbers++;
        }
        i++;
    }
    console.log('Number of even elements - ' + evenNumbers);
}

function negNum(numbersMass) {
    let negativeNumbers = 0;
    let i = 0;
    while (i < numbersMass.length) {
        if (numbersMass[i] < 0) {
            negativeNumbers++
        }
        i++;
    }
    console.log('Number of negative elements - ' + negativeNumbers);
}

checkTask.addEventListener('click', function () {
    console.log('Task 5');

    let numbersMass = numbers.value.split(', ').map(Number);
    console.log(numbersMass);
    findMinNumber(numbersMass);
    findIndexMaxNumber(numbersMass);
    evenNum(numbersMass);
    negNum(numbersMass);

    result.innerText = `Look in console!`;
});
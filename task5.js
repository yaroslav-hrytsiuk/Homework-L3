//Task 5

console.log('\n');

const numbers = document.getElementById('numbers'),
    checkTask = document.getElementById('checkTask'),
    result = document.getElementById('result');

checkTask.addEventListener('click', function () {
    console.log('Task 5');

    let numbersMass = numbers.value.split(', ').map(Number);
    console.log(numbersMass);

    function findMinNumber(numbersMass) {
        let minNumber = Math.min.apply(null, numbersMass);
        console.log(`Min number - ${minNumber}`);
    }
    findMinNumber(numbersMass);

    function findIndexMaxNumber(numbersMass) {
        let maxNumber = numbersMass.indexOf(Math.max.apply(null, numbersMass));
        console.log('Sequence number of max element - ' + maxNumber);
    }
    findIndexMaxNumber(numbersMass);

    function evenNum(numbersMass) {
        let evenNumbers = 0;
        let i = 0;
        while (i < numbersMass.length) {
            if (numbersMass[i] % 2 === 0) {
                evenNumbers++
            }
            i++;
        }
        console.log('Number of even elements - ' + evenNumbers);
    }
    evenNum(numbersMass);

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
    negNum(numbersMass);

    result.innerText = `Look in console!`;
});
//Task 2 

console.log('\n');
console.log('Task 2');

const age = 27;

let counterTwo = 0,
    counterSum = 0;
while (counterTwo < 1000) {
    if (counterTwo % age === 0) {
        counterSum += counterTwo
    }
    counterTwo++;
}
console.log(counterSum);

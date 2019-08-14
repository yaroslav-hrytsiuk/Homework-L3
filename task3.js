//Task 3

console.log('\n');
console.log('Task 3');

const mass = [1, 51, 694, 0.94, 45, 6, 48, 777, 999.99, 547, 32, 5];

MinNumber = function (arr) {
    let minN = Math.min.apply(null, arr);
    return minN;
}

MaxNumber = function (arr) {
    let maxN = Math.max.apply(null, arr);
    return maxN;
}

console.log('Min number is ' + MinNumber(mass));

console.log('Max number is ' + MaxNumber(mass));
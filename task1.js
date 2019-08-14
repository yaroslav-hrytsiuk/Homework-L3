//Task 1 

console.log('Task 1 with While');

let counter = 0;
while (counter < 200) {
    if (counter % 2 === 0) {
        console.log('counter', counter);
    }
    counter++;
}

console.log('\n');
console.log('Task 1 with Do...While');

counter = 0;
do {
    if (counter % 2 === 0) {
        console.log('counter', counter);
    }
    counter++;
} while (counter < 200);

console.log('\n');
console.log('Task 1 with For');

for (let counter = 0; counter < 200; counter++) {
    if (counter % 2 === 0) {
        console.log('counter', counter);
    }
    counter++;
}
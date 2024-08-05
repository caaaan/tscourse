import person from './person.js';
import worker from './worker.js';

let Can: worker = new worker("Can",20,false, "Hi ", "intern", "Octopus");

Can.greet();
console.log(Can.workerRank);

console.log(mathAdd("15","20"));
console.log(mathAdd("15",20));
console.log(mathAdd(15,"20"));
console.log(mathAdd(15,20));

function mathAdd<T, U>(n1: T, n2: U): number {

    if (typeof n1 === 'string') {
        var num1 = parseFloat(n1);
        if (isNaN(num1)) {
            throw new Error('Cannot convert string to number');
        }
    } else if (typeof n1 === 'number') {
        num1 = n1;
    } else {
        throw new Error('Invalid type for n1, expected number or string');
    }

    if (typeof n2 === 'string') {
        var num2 = parseFloat(n2);
        if (isNaN(num2)) {
            throw new Error('Cannot convert string to number');
        }
    } else if (typeof n2 === 'number') {
        num2 = n2;
    } else {
        throw new Error('Invalid type for n2, expected number or string');
    }

    return num1 + num2;
}


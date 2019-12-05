function divider() {
    console.log('-----------')
    console.log('')
    console.log('-----------')
}

const myArray = [];

let numbers = [1, 2, 3, 5, 7];

console.log(numbers);

console.log('Fourth item:', numbers[3]);
console.log(numbers[0]);
console.log('Length:', numbers.length);
console.log('Number 3:', numbers[numbers.length - 3]);
numbers.push(25);
console.log(numbers);
numbers.pop();
console.log(numbers);

const cloudy = true;
const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

for (let i = 0; i < items.length; i++) {
    //console.log('Value of i:', i);
    console.log('Item:', items[i]);
}

divider();

for (let item of items) {
    console.log('Item:', item);
}

divider();

function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}


arrayToString(["bundle.js", "*.js.map", ".c9"]);

stringToArray("bundle.js, *.js.map, .c9");

divider();

let myObject = {};

numbers = [1, 2, 3];

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
}

console.log('Objects:', myObject, smallNumbers);
console.log('Values in our object:',);
    smallNumbers.one
    smallNumbers.two
    smallNumbers.three
    smallNumbers['one']

divider();

myObject = {
    five: 5,
    six: 'six'
};            

console.log(myObject.five);
console.log(myObject.six);

myObject.newItem = 'This is a new item in my object.'

console.log('Object with new item:', myObject);

divider();

console.log(items);
items.push(myObject);




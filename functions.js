const fancyFunction = (something) => {
    return something + 'fancy';
}

let output = fancyFunction('Michael is ');
console.log(output);

output = 'something else';

let firstName = 'George';
let lastName = 'Weasley';

console.log(`${firstName} ${lastName}`);

firstName = 'Bill';
lastName = 'Weasley';

console.log(`${firstName} ${lastName}`);

firstName = 'Ginny';
lastName = 'Weasley';

console.log(`${firstName} ${lastName}`);



const sayMyName = (first, last) => {
    // do something
    return `${first} ${last}`;
}

console.log(sayMyName('Callan', 'Morrison'));

// NUGGET TIME

const nuggetizer = (animal) => {
    return `nugget ${animal}`;
}

const humaneNuggetizer = (animal) => {
    return `${animal}`;
}

const spamFactory = (literallyAnything) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('John Wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('John Wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('John Wark'));

let bandNumber = 1;


const printToDom = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;

}

const takeNumber = (bandName) => {
    printToDom(`<h3>${bandNumber}. ${bandName} </h3>`);
    bandNumber++;
}

takeNumber('Galactic Scum');
takeNumber('Underdogs');
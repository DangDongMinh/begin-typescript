"use strict";

function getPerson(person) {
    return "Ten " + person.name + " tuoi " + person.age;
}
console.log(getPerson({
    name: "Minh",
    age: 23
}));
function getPersonTwo(person) {
    return "Ten " + person.name + ", tuoi " + person.age;
}
console.log(getPersonTwo({
    name: "Danh",
    age: 23
}));
function getPersonThree(person) {
    var output = '';
    if (person.name) {
        output += 'Ten la ' + person.name + '. ';
    }
    if (person.age) {
        output += 'Tuoi la ' + person.age + '. ';
    }
    if (!output) {
        output = 'khong co du lieu';
    }
    return output;
}
console.log(getPersonThree({
    name: 'Toan',
    age: 23
}));
console.log(getPersonThree({
    name: 'Toan'
}));
console.log(getPersonThree({
    age: 23
}));
console.log(getPersonThree({}));
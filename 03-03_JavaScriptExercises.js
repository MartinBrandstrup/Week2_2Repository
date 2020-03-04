//Assignment 1
console.log('Assignment 1')

const nameArray = [
    'Lars', 'Jan', 'Peter', 'Bo', 'Frederik', 'Torben',
    'Katrine', 'Joakim', 'Anika', 'Anders']

const aFilter = (x) => x.toLowerCase().includes('a')

console.log('\nFilter: \n')
console.log(
    nameArray.filter(aFilter))

console.log('\nMap: \n')
console.log(
    nameArray.map(s => s.split("").reverse().join("")))

//Split makes String into Array of chars







//Assignment 2a
console.log('\nAssignment 2a')

function myFilter(array, callback) {
    let filteredAray = [];
    array.forEach(word => {
        if (callback(word)) {
            filteredAray.push(word)
        }
    });
    return filteredAray
}

console.log('\nMy Filter: \n')
console.log(
    myFilter(nameArray, aFilter))

//Assignment 2b
console.log('\nAssignment 2b')

function myMap(array, callback) {
    let mappedArray = [];
    array.forEach(word => {
        if (callback(word)) {
            mappedArray.push(callback(word))
        }
    });
    return mappedArray
}

console.log('\nMy Map: \n')
console.log(
    myMap(nameArray, s => s.split("").reverse().join("")))







//Assignment 3
console.log('\nAssignment 3')



Array.prototype.myProtFilter = function (callback) {
    let filteredAray = [];
    this.forEach(word => {
        if (callback(word)) {
            filteredAray.push(word)
        }
    });
    return filteredAray
}

console.log('\nMy prototype Filter: \n')
console.log(
    nameArray.myProtFilter(aFilter))

Array.prototype.myProtMap = function (callback) {
    let mappedArray = [];
    this.forEach(word => {
        if (callback(word)) {
            mappedArray.push(callback(word))
        }
    });
    return mappedArray
}

console.log('\nMy prototype Map: \n')
console.log(
    nameArray.myProtMap(s => s.split("").reverse().join("")))







//Assignment 4a
console.log('\nAssignment 4a')

const numbers = [1, 3, 5, 10, 11]
//Expected result: [4,8,15,21,11]

console.log(
    numbers.map((n, i) => {
    if (i <= 1) {           //1,3
        return (n + 1) * 2
    } else if (i == 2) {    //5
        return n * 3
    } else if (i == 3) {    //10
        return n * 2 + 1
    } else return n         //11
}))








//Assignment 4b
console.log('\nAssignment 4b')

const names = ['Lars', 'Peter', 'Jan', 'Bo']

console.log(
    '<nav>\n'+ names.map(n => '<a href="">' +n + '</a>\n' ).join("") + '</nav>')







//Assignment 4c
console.log('\nAssignment 4c')

let namesAndPhones = [
    {name: "Lars",  phone:"1234567"}, 
    {name: "Peter", phone: "675843"}, 
    {name: "Jan",   phone: "98547"}, 
    {name: "Bo",    phone: "79345"}
];

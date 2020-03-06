// Code along in class tuesday

//Hvad er et objekt?
console.log('Hvad er et objekt?\n')

let obj = {
    name: 'Jon',
    address: 'Nordre Frihavnsgade',
    fun: function test(message){
        console.log('message text: ' + message)
    }
}

let tekst = '{ "name": "Jon Snow", "address": "The Wall" }'
let nytObj = JSON.parse(tekst,null)

console.log(obj)
console.log(obj.name + '' + obj.address)
obj.fun('blabla')

console.log(nytObj)

//Hvad er en funktion - og hvordan er det lige man bruger dem?
console.log('\nHvad er en funktion - og hvordan er det lige man bruger dem?\n')

const fun = function funfun(message){
    let tmp = message + ' det var ikke fun'
    console.log(tmp)
    return tmp
}

const result = fun('Skriv mig ud!')

console.log('result: ' + result)

//Hvad betyder immutable
//Hvad er et array og hvordan bruger man det?
console.log ('\nHvad er et array og hvordan bruger man det?')
console.log ('Hvad betyder immutable\n')

arrString = [ 'ole', 'bente', 'hans' ]

console.log(arrString.join(","))

const arrInt = [1,2,3]

function dobbeltOp(x){
    return x * 2
}

const dobbeltOpArr = arrInt.map(dobbeltOp)

console.log(dobbeltOpArr)

//Hvad er en arrow-funktion? (Lambda)
console.log('\nHvad er en arrow-funktion? (Lambda)')

//const dobbeltOpArrow = arrInt.map( (x) => x * 2 )
const dobbeltOpArrow = arrInt.map( (x) => {
    x = x + 1
    return x * 2
})

console.log(dobbeltOpArrow)
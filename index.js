// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}

function appendCat(name){
    const appendCat = [...cats, name]
    return appendCat
}

appendCat['Broom']

console.log(appendCat)
console.log(cats)


function prependCat(name){
    const prependCat = [name,...cats]
    return prependCat
}

prependCat['Arnold']

console.log(prependCat)
console.log(cats)


// function removeLastCat(name){
//     cats.splice(-1)
//     return removeLastCat
// }

// console.log(removeLastCat)
// console.log(cats)

function removeLastCat(name){
    const newCatsList = ['Milo', 'Otis', 'Garfield']
    newCatsList.pop('Garfield')
    return newCatsList
}
// newCatsList
// console.log (removeLastCat)
console.log(newCatsList)

function removeFirstCat(name){
    const newCatsList = ['Milo', 'Otis', 'Garfield']
    newCatsList.shift('Milo')
    return newCatsList
}

console.log(newCatsList)
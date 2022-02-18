console.log(['John', 'Jane', 'Peter', 'David', 'Mary']);
['John', 'Jane', 'Peter', 'David', 'Mary']
.forEach(item => {
    console.log(item)
});

const arr = ['John', 'Jane', 'Peter', 'David', 'Mary']
arr.push('Tona')
console.log(arr);

console.log(arr.filter(item => item === 'Tona')); // Result [Tona]

console.log(arr.map(item => {
    return `${item}-J2`
})); // Result ['John-J2', 'Jane-J2', 'Peter-J2', 'David-J2', 'Mary-J2', 'Tona-J2']

console.log(arr.reverse()); // Result ['Tona', 'Mary', 'David', 'Peter', 'Jane', 'John']

console.log(arr.shift()); // remove first element [Tona]

console.log([11,2,22,1].sort((a, b) => a - b)); // [ 1, 2, 11, 22 ]

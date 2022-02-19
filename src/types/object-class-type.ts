let person2 = {
    card: '1001',
    phone: '012-000-000'
}
console.log(person2)


console.log(Object.getOwnPropertyDescriptor(person2, 'card')); // { value: '1001', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person2, 'address')); // undefined

console.log(Object.getOwnPropertyNames(person2)); // [ 'card', 'phone' ]
console.log(Object.keys(person2)); // [ 'card', 'phone' ]

// add new property to object
console.log(Object.defineProperties(person2, { address: { value: 'PP', writable: true, configurable: true, enumerable: true } }))

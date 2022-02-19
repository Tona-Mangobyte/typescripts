let pending: boolean; // Variable might not have been initialized
console.log(pending)

pending = true;
console.log(pending)

pending = false
console.log(pending)

let book: {
    title: string,
    active: boolean
} // Variable might not have been initialized
console.log(book)

book = {
    title: 'Typescript 2Edition',
    active: true
}
if (book.active) {
    console.log(book)
}

book = {
    title: 'Typescript',
    active: undefined
}
if (book.active) {
    console.log(book)
}

book = null
if (book.active) { // Cannot read properties of null (reading 'active')
    console.log(book)
}

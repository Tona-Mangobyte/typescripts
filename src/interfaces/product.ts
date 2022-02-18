interface Product {
    id: number,
    name: string,
    price: number
}
function getProduct2(id) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}
const product3 = getProduct2(1);
console.log(`The product ${product3.name} costs $${product3.price}`);

const showProduct2 = (name: string, price:number)  => {
    console.log(`The product ${name} costs ${price}$.`);
};
showProduct2(product3.name, product3.price);

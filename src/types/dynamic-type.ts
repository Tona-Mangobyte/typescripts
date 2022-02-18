// dynamic types | return type
function getProduct(id){
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}
const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

const showProduct = (name, price)  => {
    console.log(`The product ${name} costs ${price}$.`);
};
const product2 = getProduct(1);
showProduct(product2.price, product2.name);

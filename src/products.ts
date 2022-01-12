export interface Product {
    name: string,
    price: number
}

let products: Product[] = [{
    name: 'apples',
    price: 5
},{
    name: 'oranges',
    price: 5
}, {
    name: 'mangos',
    price: 11
}]

export function calcAverageProductPrice(products: Product[]): number {

    const average = products.reduce((total, next) =>
    total + next.price, 0) / products.length;

    if(products.length === 0) {
        return 0;
    }

    return average;

}

console.log(calcAverageProductPrice(products));
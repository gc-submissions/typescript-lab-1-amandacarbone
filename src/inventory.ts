import { Product } from "../src/products";

export interface InventoryItem {
    product: Product[],
    // quantity: number
}

let inventory: InventoryItem[] = [{
    product: [{
        name: 'motor',
        price: 10.00
    },{
        name: 'sensor',
        price: 12.50
    },{
        name: 'LED',
        price: 1.00
    }]
}]

export function calcInventoryValue(inventory: InventoryItem[]): number {

    const value = inventory.reduce((quantity, price) => inventory.product.price)

    if(inventory.length === 0) {
        return 0;
    }

    return value;

}

console.log(calcInventoryValue(inventory));
export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [{
    name: 'Kilimanjaro',
    height: 19341
},{
    name: 'Everest',
    height: 29029
},{
    name: 'Denali',
    height: 20310
}]

export function findNameOfTallestMountain(mountains: Mountain[]): string {
    
    let tallest = mountains.reduce(function(max, mountains) {
        return mountains.height > max.height ? mountains : max
    });

    if(mountains.length === 0) {
        return '';
    }

    return tallest.name;

}

console.log(findNameOfTallestMountain(mountains));
export type elf = {
    calories: number;
    items: number[];
}
export function mostCalories(elves:elf[]):number {
    return sortElves(elves)[0].calories;
}

export function sortElves(elves:elf[]):elf[] {
    return elves.sort((a, b) => b.calories - a.calories);
}
export function getTopThree(elves:elf[]):number {
    const local = sortElves(elves);   
    return (local[0].items.reduce((x, y) => x+ y) + local[1].items.reduce((x, y) => x+ y) + local[2].items.reduce((x, y) => x+ y));
}
export function importElves(data:string):elf[] {
    const lines = data.split('\n\n');
    const elfs = 
    
    
    
    [] as elf[]; 

    lines.forEach(element => {        
        const items = element.split('\n').map(x => +x);
        elfs.push({
            calories: items.reduce((a, b) => a +b),
            items
        })
    });    
    return elfs;
}



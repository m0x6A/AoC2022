
import * as _ from 'lodash';
export interface Rucksack {
    compartment_one: string
    compartment_two: string
}
export interface GroupedItem {
    rucksack_one: string;
    rucksack_two: string;
    rucksack_three: string;
}
export function importBackpacks(importData: string):Rucksack[] {
    return importData.split('\n').map(line => {
        return {
            compartment_one: line.substring(0, line.length/2),
            compartment_two: line.substring(line.length/2, line.length)
        }
    });
}
export function importItemsInChunks(importData:string): GroupedItem[] {
    const data = importData.split('\n');
    return _.chunk(data, 3).map((chunk:string[]) => {
        return { 
            rucksack_one: chunk[0],
            rucksack_two: chunk[1],
            rucksack_three: chunk[2]
        }
    });    
}
export function findDuplicateItems(ruckSack: Rucksack) {
    return ruckSack.compartment_one.split('').filter(item => ruckSack.compartment_two.includes(item))[0]?.toString();
}

export function findBadges(group:GroupedItem):string {
    return group.rucksack_one.split('').filter(item => item && group.rucksack_two?.includes(item) && group.rucksack_three?.includes(item))[0]?.toString();
}


export function mapCharactersToPoints(char: string) {
    if(!char) {
        return 0;
    }
    if(char.toLowerCase() === char) {
        return parseInt(char, 36) - 9;
    }
    return (parseInt(char, 36) - 9) + 26
}

export function aggregateBadgesScore(groups:GroupedItem[]) {
    return groups
        .map(group => findBadges(group))
        .map(item => mapCharactersToPoints(item))
        .reduce((a, b) => a+b)
}

export function aggregateScore(rucksacks: Rucksack[]) {
    return rucksacks
        .map(rucksack => findDuplicateItems(rucksack))
        .map(item => mapCharactersToPoints(item))
        .reduce((a,b) => a+b);
}


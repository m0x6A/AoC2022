import { aggregateBadgesScore, aggregateScore, findBadges, findDuplicateItems, GroupedItem, importBackpacks, importItemsInChunks, mapCharactersToPoints, Rucksack } from './day3';
import { day3RawData } from './day3.data';

const expectedData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const expectedRucksacks:Rucksack[] = [
  { compartment_one: 'vJrwpWtwJgWr', compartment_two: 'hcsFMMfFFhFp' },
  { compartment_one: 'jqHRNqRjqzjGDLGL', compartment_two: 'rsFMfFZSrLrFZsSL' },
  { compartment_one: 'PmmdzqPrV', compartment_two: 'vPwwTWBwg' },
  { compartment_one: 'wMqvLMZHhHMvwLH', compartment_two: 'jbvcjnnSBnvTQFn' },
  { compartment_one: 'ttgJtRGJ', compartment_two: 'QctTZtZT' },
  { compartment_one: 'CrZsJsPPZsGz', compartment_two: 'wwsLwLmpwMDw' },
];
const expectedChunks: GroupedItem[] = [
    {
        rucksack_one:'vJrwpWtwJgWrhcsFMMfFFhFp',
        rucksack_two: 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        rucksack_three: 'PmmdzqPrVvPwwTWBwg'
    },
    {
        rucksack_one: 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        rucksack_two: 'ttgJtRGJQctTZtZT',
        rucksack_three: 'CrZsJsPPZsGzwwsLwLmpwMDw'
    }
]
const expectedItems:string[] = [
    'p',
    'L',
    'P',
    'v',
    't',
    's'
]
const expectedBadges:string[] = [
    'r',
    'Z'
]
const expectedPoints: number[] = [
    16,
    38,
    42,
    22,
    20,
    19,
]

describe('import data', () => {
  it('should import data to correct backpacks', () => {
    const result = importBackpacks(expectedData);
    expect(result).toEqual(expectedRucksacks);
  });
});

describe('find duplicate values', () => {
  it('should find duplicate values', () => {
    for(let i = 0; i < expectedItems.length; i++)
    {
        const result = findDuplicateItems(expectedRucksacks[i])
        expect(result).toBe(expectedItems[i]);
    }    
  });
});


describe('map characters',() => {
    it('shoud map characters to correct number', () => {
        for(let i = 0; i < expectedItems.length; i++)
        {
            const result = mapCharactersToPoints(expectedItems[i])
            expect(result).toBe(expectedPoints[i]);
        }    
    })
})

describe('locate badges', () => {
    it('it should find the correct badge', () => {
        for(let i = 0; i < expectedBadges.length; i++)
        {
            const result = findBadges(expectedChunks[i])
            expect(result).toBe(expectedBadges[i]);
        }    
    })
})

describe('Aggegate score', () => {
    it('should aggregate the score correctly from items', () => {
        const result = aggregateScore(expectedRucksacks);
        expect(result).toBe(157)
    })
    it('should aggregate the score correctly from badges', () => {
        const result = aggregateBadgesScore(expectedChunks);
        expect(result).toBe(70);
    })
   
});

describe('Solve the puzzle', () => {
    it('should solve the first part of the puzze', () => {
        const day3data = importBackpacks(day3RawData);
        const result = aggregateScore(day3data);
        console.log(`Part 1: ${result}`)
    });

    it('should solve the second part of the puzzle', () => {
        const data = importItemsInChunks(day3RawData);
        const result = aggregateBadgesScore(data);        
        console.log(`Part 2 ${result}`);
      })
})
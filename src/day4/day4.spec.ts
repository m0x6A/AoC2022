import { CleaningTeam, findDuplicatePatterns, findDuplicateSections, importTeams } from "./day4";
import { day4RawData } from "./day4.data";

const exampleData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;


const expectedImportResult:CleaningTeam[] = [
    {
        elf1: [2,3,4],
        elf2: [6,7,8]
    },
    {
        elf1: [2,3],
        elf2: [4,5]        
    },
    {
        elf1: [5,6,7],
        elf2: [7,8,9]
    },
    {
        elf1: [2,3,4,5,6,7,8],
        elf2: [3,4,5,6,7]
    },
    {
        elf1: [6],
        elf2: [4,5,6]
    },
    {
        elf1: [2,3,4,5,6],
        elf2: [4,5,6,7,8]
    }

] 
describe('importing data', () => {
    it('should import data correctly', () => {
        const result = importTeams(exampleData)

        expect(result).toEqual(expectedImportResult);
        
    })
})
describe('finding overlaps', () => {
    it('finds overlapping sections', () => {
        const result = findDuplicateSections(expectedImportResult);
        expect(result).toBe(2);
    });
    it('finds overlapping patterns', () => {
        const result = findDuplicatePatterns(expectedImportResult);
        expect(result).toBe(4);
    })
})

describe('solve', () => {
    const data = importTeams(day4RawData);
    const result = findDuplicateSections(data);
    console.log(result)
})
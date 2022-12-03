import { getTopThree, importElves, mostCalories } from "./day1";

const data = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const testElves = [
    { 
        calories: 6000,
        items: [1000,2000,3000] 
    },
    { 
        calories: 4000,
        items: [4000]
    },     
    { 
        calories: 11000,
        items: [5000,6000]
    },
    { 
        calories: 24000,
        items: [7000, 8000, 9000]
    },
    { 
        calories: 10000,
        items: [10000]
    },
].sort((a,b) => a.calories - b.calories);
describe('Elf 4 should be highest', () => {
    it("24000 Should be highest", () => {
        const calories = mostCalories(testElves);
        expect(calories).toBe(24000);
    });
})
describe('it should import data', () => {
    it("should have correct data", () => {
        const arrays = importElves(data);
        expect(arrays.sort((a,b)=> a.calories - b.calories)).toStrictEqual(testElves.sort((a,b)=> a.calories - b.calories));
    });

});

describe('it should combine data',() => {
    it('should combine the top three elves', () => {
        const value = getTopThree(testElves);
        expect(value).toBe(45000);
    })
});
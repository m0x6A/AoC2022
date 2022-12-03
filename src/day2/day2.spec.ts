import { aggregateResult, calculateResult, calculateWinner, importMatches, Match } from './day2'

const data = `A Y
B X
C Z
`
const expectedArray:Match[] = [
    {
        a: 'A',
        b: 'Y',
    },
    {
        a: 'B',
        b: 'X',
    },
    {
        a: 'C',
        b: 'Z'
    }
]
describe('It should import correctly',() => {
    it('should match the expected array', () => {
        const actualArray = importMatches(data);
        expect(actualArray).toEqual(expectedArray);
    })
});
describe('It should calculate winners correctly', () => {
    it('should return draw if equal', () => {
        const result = calculateWinner({
            a: 'A',
            b: 'X'
        })
        expect(result).toEqual('draw');
    });
});

describe('It should calculate the score correctly', () => {
    it('should calculat win correctly', () => {
        const result = calculateResult({ a: 'A', b: 'Y'});
        expect(result).toBe(8);
    });
})
describe('it should aggregate results', () => {
    it('should return correct score', () => {
        const result = aggregateResult(expectedArray);
        expect(result).toBe(15);
    })
});
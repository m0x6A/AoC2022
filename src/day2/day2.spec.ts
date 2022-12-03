import { aggregateResult, calculateHand, calculateResult, calculateWinner, importMatches, Match } from './day2';

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
        const a_x = calculateWinner({
            a: 'A',
            b: 'X'
        })      
        expect(a_x).toEqual('draw');
  
    });
});

describe('It should calculate the score correctly', () => {
    it('should calculat win correctly', () => {
        const result = calculateResult({ a: 'A', b: 'Y'});
        expect(result).toBe(8);
    });
    it('should calculate loss correctly', () => {
        const result = calculateResult({
            a: 'B',
            b: 'X'
        });
        expect(result).toBe(1);
    })
    it('should calculate draw correctly', () => {
        const result = calculateResult({
            a: 'C',
            b: 'Z'
        })
        expect(result).toBe(6);
    })
})

describe('it should should calculate hand results correctly', () => {
    it('should calculate paper draw correctly', () => {
        const result = calculateHand({
            a: 'A',
            b: 'Y'
        })
        expect(result).toBe(4);
    })
    it('should calculate rock loss correctly', () => {
        const result = calculateHand({
            a: 'B',
            b: 'X'
        })
        expect(result).toBe(1);
    })
    it('should calculate scissor win correctly', () => {
        const result = calculateHand({
            a: 'C',
            b: 'Z'
        })
        expect(result).toBe(7);
    })

})
describe('aggregate with hand calculation', () => {
    it('should return correct score', () => {
        const result = aggregateResult(expectedArray, calculateHand)
        expect(result).toBe(12);
    })
})
describe('it should aggregate results', () => {
    it('should return correct score', () => {
        const result = aggregateResult(expectedArray, calculateResult);
        expect(result).toBe(15);
    })
});
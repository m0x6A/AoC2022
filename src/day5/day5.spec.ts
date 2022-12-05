import { importStacks, LoadingProcess } from './day5';

const exampleData = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const expectedData: LoadingProcess[] = [
  {
    stacks: {
      1: ['N', 'Z'],
      2: ['D', 'C', 'M'],
      3: ['P'],
    },
    moves: [
      {
        source: 2,
        destination: 1,
        amount: 1,
      },
      {
        source: 3,
        destination: 3,
        amount: 3,
      },
      {
        source: 2,
        destination: 1,
        amount: 2,
      },
      {
        source: 1,
        destination: 2,
        amount: 1,
      },
    ],
  },
];

describe('importing data', () => {
  it('should import data correctly', () => {
    const result = importStacks(exampleData);
    expect(result).toEqual(expectedData);
  });
});

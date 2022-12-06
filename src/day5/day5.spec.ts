import { importStacks, LoadingProcess, moveCrates, moveCratesInBatches } from './day5';
import { day5Rawdata } from './day5.data';

const exampleData = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const expectedData: LoadingProcess = {
  stacks: [
    {
      crates: ['Z', 'N'],
    },
    {
      crates: ['M', 'C', 'D'],
    },
    {
      crates: ['P'],
    },
  ],
  moves: [
    {
      from: 2,
      to: 1,
      amount: 1,
    },
    {
      from: 1,
      to: 3,
      amount: 3,
    },
    {
      from: 2,
      to: 1,
      amount: 2,
    },
    {
      from: 1,
      to: 2,
      amount: 1,
    },
  ],
};

const otherdata:LoadingProcess = {
  stacks: [
    {
      crates: ['Z', 'N'],
    },
    {
      crates: ['M', 'C', 'D'],
    },
    {
      crates: ['P'],
    },
  ],
  moves: [
    {
      from: 2,
      to: 1,
      amount: 1,
    },
    {
      from: 1,
      to: 3,
      amount: 3,
    },
    {
      from: 2,
      to: 1,
      amount: 2,
    },
    {
      from: 1,
      to: 2,
      amount: 1,
    },
  ],
};
const expectedMessage = 'CMZ';
describe('importing data', () => {
  it('should import data correctly', () => {
    const result = importStacks(exampleData);
    expect(result).toEqual(expectedData);
  });
});
describe('moving crates', () => {
  it('should move boxes correctly', () => {
    const result = moveCrates(expectedData);
    expect(result).toEqual(expectedMessage);
  });
  it('should move boxes in order',() => {
    const result =  moveCratesInBatches(otherdata);
    expect(result).toEqual('MCD');
  })
});
describe('solve the puzzle', () => {
  it('should solve the puzzle', () => {

    const data = importStacks(day5Rawdata);
    
    const result = moveCratesInBatches(data);
    
    expect(result).toEqual('ZFSJBPRFP');
  })
})
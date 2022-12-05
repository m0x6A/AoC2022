
export interface CleaningTeam {
  elf1: number[];
  elf2: number[];
}

export function importTeams(rawData: string): CleaningTeam[] {
  return rawData
    .split('\n')
    .map((line) => line.split(','))
    .filter((team) => team !== undefined)
    .map((team) => {
      return {
        elf1: findMissingNumbers(team[0]),
        elf2: findMissingNumbers(team[1]),
      } as CleaningTeam;
    });
}

export function findDuplicateSections(teams: CleaningTeam[]) {
  const overlaps = teams.flatMap((team) => findOverlaps(team.elf1, team.elf2));
  return overlaps.reduce((a, b) => a + b);
}

export function findDuplicatePatterns(teams: CleaningTeam[]) {
    const overlaps = teams.flatMap((team) => countOverlappingSectors(team.elf1, team.elf2));
    return overlaps.reduce((a, b) => a + b);

}

function findOverlaps(a: number[], b: number[]): number {
  if (!a.every((x) => b.includes(x)) && !b.every((x) => a.includes(x))) {
    return 0;
  }
  return 1;
}


function countOverlappingSectors(a: number[], b: number[]): number {

  if(!a.find(x => b.includes(x)) && !b.find(x => a.includes(x)))
  {
    return 0
  }
  return 1;
}
function findMissingNumbers(team: string): number[] {
  const numbers = team.split('-');
  const allNumbers: number[] = [];

  for (let i = parseInt(numbers[0]); i <= parseInt(numbers[1]); i++) {
    allNumbers.push(i);
  }
  return allNumbers;
}

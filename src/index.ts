/* eslint-disable */
import { getTopThree, importElves, mostCalories } from './day1/day1';

import { day1RawData } from './day1/day1.data';
import {
  aggregateResult,
  calculateHand,
  calculateResult,
  importMatches
} from './day2/day2';
import { day2RawData } from './day2/day2.data';
import {
  aggregateBadgesScore,
  aggregateScore,
  importBackpacks,
  importItemsInChunks
} from './day3/day3';
import { day3RawData } from './day3/day3.data';
import {
  findDuplicatePatterns,
  findDuplicateSections,
  importTeams
} from './day4/day4';
import { day4RawData } from './day4/day4.data';
import { importStacks, moveCrates, moveCratesInBatches } from './day5/day5';
import { day5Rawdata } from './day5/day5.data';

function printResult(day: number, part: number, result: number | string) {
  return console.log(`Day ${day}, part ${part}: ${result}`);
}

/* ------------------ DAY 1 --------------------- */
const day1Elves = importElves(day1RawData);
const day1part1 = mostCalories(day1Elves);
printResult(1, 1, day1part1);

const day1part2 = getTopThree(day1Elves);
printResult(1, 2, day1part2);

/* ------------------ DAY 2 --------------------- */
const day2matches = importMatches(day2RawData);
const day2part1 = aggregateResult(day2matches, calculateResult);
printResult(2, 1, day2part1);

const day2part2 = aggregateResult(day2matches, calculateHand);
printResult(2, 2, day2part2);

/* ------------------ DAY 3 --------------------- */
const day3Rucksacks = importBackpacks(day3RawData);
const day3part1 = aggregateScore(day3Rucksacks);
printResult(3, 1, day3part1);

const day3ChunckedRucksacks = importItemsInChunks(day3RawData);
const day3part2 = aggregateBadgesScore(day3ChunckedRucksacks);
printResult(3, 2, day3part2);

/* ------------------ DAY 4 --------------------- */

const day4Teams = importTeams(day4RawData);
const day4part1 = findDuplicateSections(day4Teams);
printResult(4, 1, day4part1);

const day4part2 = findDuplicatePatterns(day4Teams);
printResult(4, 1, day4part2);

/* ------------------ DAY 5 --------------------- */

const day5process = importStacks(day5Rawdata);
const day5part1 = moveCrates(day5process);

printResult(5, 1, day5part1);

const day5process2 = importStacks(day5Rawdata);
const day5part2 = moveCratesInBatches(day5process2);
printResult(5, 2, day5part2);

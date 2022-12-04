import { getTopThree, importElves, mostCalories } from "./day1/day1";
import { day1RawData } from "./day1/day1.data";
import { aggregateResult, calculateHand, calculateResult, importMatches } from "./day2/day2";
import { day2RawData } from "./day2/day2.data";
import { aggregateBadgesScore, aggregateScore, importBackpacks, importItemsInChunks } from "./day3/day3";
import { day3RawData } from "./day3/day3.data";


function printResult(day:number, part: number, result:number) {
    return console.log(`Day ${day}, part ${part}: ${result}`);
}

/* ------------------ DAY 1 --------------------- */
const day1Elves = importElves(day1RawData)
const day1part1 = mostCalories(day1Elves);
printResult(1,1, day1part1);

const day1part2 = getTopThree(day1Elves);
printResult(1,2, day1part2);

/* ------------------ DAY 2 --------------------- */
const day2matches = importMatches(day2RawData);
const day2part1 = aggregateResult(day2matches, calculateResult)
printResult(2,1, day2part1);

const day2part2 = aggregateResult(day2matches, calculateHand);
printResult(2,2, day2part2);

/* ------------------ DAY 3 --------------------- */
const day3Rucksacks = importBackpacks(day3RawData);
const day3part1 = aggregateScore(day3Rucksacks);
printResult(3,1, day3part1);

const day3ChunckedRucksacks = importItemsInChunks(day3RawData);
const day3part2 = aggregateBadgesScore(day3ChunckedRucksacks);
printResult(3, 2, day3part2)

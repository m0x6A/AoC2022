import { aggregateScore, importBackpacks } from "day3/day3";
import { day3RawData } from "day3/day3.data";

const day3data = importBackpacks(day3RawData);
const day3score = aggregateScore(day3data);
console.log(`Day 3 Part 1: ${day3score}`);
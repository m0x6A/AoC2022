import { getTopThree, importData, mostCalories, sortElves } from "./day1";
import { actualData } from "./day1.data";

const data = importData(actualData);

const value = mostCalories(data);

const value2 = getTopThree(sortElves(data));
console.log(value2);
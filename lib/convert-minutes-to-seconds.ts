/**
 * 
 * @param minutes 
 * @returns seconds
 */


const convertMinutesToSeconds = (minutes: Number | String) => Number(minutes) * 60;

console.log(convertMinutesToSeconds(5));
console.log(convertMinutesToSeconds('3'));
console.log(convertMinutesToSeconds(2));

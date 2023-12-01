import { buildNextHoliday, buildNextLongWeekend, buildSubsequentHoliday } from "./builder.js";

let indexForHolidays = 0;
let indexForLongWeekends = 0;
document.addEventListener("DOMContentLoaded", getHolidays());

async function getHolidays(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
                            .then(response => response.json())
                            .catch(error => console.error("Error fetching data", error));

    const currentDate = new Date();
    const nextHoliday = holidays.holidays.find(holiday => new Date(holiday.date) > currentDate);

    buildNextHoliday(nextHoliday);
    indexForHolidays = 0;
    indexForLongWeekends = 0;
    getNextLongWeekend();

    countdownForHolidays(nextHoliday.date);
}

async function getSubsequentHoliday(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
    .then(response => response.json())
    .catch(error => console.error("Error fetching data", error));
    const currentDate = new Date();
    const nextHolidays = holidays.holidays.filter(holiday => new Date(holiday.date) > currentDate)
    console.log(nextHolidays[indexForHolidays])
    indexForHolidays++;
    buildSubsequentHoliday(nextHolidays, indexForHolidays);
    countdownForHolidays(nextHolidays[indexForHolidays].date);
    return nextHolidays;
}

async function getNextLongWeekend(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
                            .then(response => response.json())
                            .catch(error => console.error("Error fetching data", error));
    const currentDate = new Date();
    let nextLongWeekends = holidays.holidays.filter(holiday => holiday.longWeekend === true).filter(holiday => new Date(holiday.date) > currentDate);

    buildNextLongWeekend(nextLongWeekends, indexForLongWeekends);
    countdownForLongWeekends(nextLongWeekends[indexForLongWeekends].date);
    indexForLongWeekends++;
}

function countdownForHolidays(nextHolidayDate){
    let currentDate = new Date();
    let nextDate = new Date(nextHolidayDate);
    const dayDifference = Math.ceil((nextDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
    let h1 = document.getElementById('h1');
    h1.textContent = `The next holiday is on: ${dayDifference} days later`;
}


function countdownForLongWeekends(nextLongWeekendDate){
    let currentDate = new Date();
    let nextDate = new Date(nextLongWeekendDate);
    const dayDifference = Math.ceil((nextDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
    let h2 = document.getElementById('h2');
    h2.textContent = `The next long weekend is on: ${dayDifference} days later`;
}

// NOTE: not a good practice, but serves the purpose now
window.getHolidays = getHolidays;
window.getSubsequentHoliday = getSubsequentHoliday;
window.getNextLongWeekend = getNextLongWeekend;
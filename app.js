let indexForHolidays = 0;
let indexForLongWeekends = 0;
document.addEventListener("DOMContentLoaded", getHolidays());

async function getHolidays(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
                            .then(response => response.json())
                            .catch(error => console.error("Error fetching data", error));

    const currentDate = new Date();
    const nextHoliday = holidays.holidays.find(holiday => new Date(holiday.date) > currentDate);
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let mainContainer = document.getElementById('nextHolidayContainer');
    mainContainer.textContent = '';
    let holidayName = document.createElement('p');
    let holidayDate = document.createElement('p');
    holidayName.textContent = nextHoliday.name;
    holidayDate.textContent = new Date(nextHoliday.date).toLocaleDateString('en-US', dateOptions);
    mainContainer.appendChild(holidayName);
    mainContainer.appendChild(holidayDate);
    indexForHolidays = 0;
    indexForLongWeekends = 0;
    getNextLongWeekend();

    countdown(nextHoliday.date);
}

async function getSubsequentHoliday(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
    .then(response => response.json())
    .catch(error => console.error("Error fetching data", error));
    const currentDate = new Date();
    const nextHolidays = holidays.holidays.filter(holiday => new Date(holiday.date) > currentDate)
    console.log(nextHolidays[indexForHolidays])
    indexForHolidays++;
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let mainContainer = document.getElementById('nextHolidayContainer');
    mainContainer.textContent = '';
    let holidayName = document.createElement('p');
    let holidayDate = document.createElement('p');
    holidayName.textContent = nextHolidays[indexForHolidays].name;
    holidayDate.textContent = new Date(nextHolidays[indexForHolidays].date).toLocaleDateString('en-US', dateOptions);
    mainContainer.appendChild(holidayName);
    mainContainer.appendChild(holidayDate);
    countdown(nextHolidays[indexForHolidays].date);
    return nextHolidays;
}

async function getNextLongWeekend(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
                            .then(response => response.json())
                            .catch(error => console.error("Error fetching data", error));
    const currentDate = new Date();
    let nextLongWeekends = holidays.holidays.filter(holiday => holiday.longWeekend === true).filter(holiday => new Date(holiday.date) > currentDate);

    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let mainContainer = document.getElementById('nextLongWeekendContainer');
    mainContainer.textContent = '';
    let holidayName = document.createElement('p');
    let holidayDate = document.createElement('p');
    holidayName.textContent = nextLongWeekends[indexForLongWeekends].name;
    holidayDate.textContent = new Date(nextLongWeekends[indexForLongWeekends].date).toLocaleDateString('en-US', dateOptions);
    mainContainer.appendChild(holidayName);
    mainContainer.appendChild(holidayDate);
    countdown(nextLongWeekends[indexForLongWeekends].date);
    indexForLongWeekends++;
}

function countdown(nextHolidayDate){
    let currentDate = new Date();
    let nextDate = new Date(nextHolidayDate);
    const dayDifference = Math.ceil((nextDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
    let h1 = document.getElementById('h1');
    h1.textContent = `The next holiday is on: ${dayDifference} days later`;
}


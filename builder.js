const buildNextHoliday = (nextHoliday) => {
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let mainContainer = document.getElementById('nextHolidayContainer');
  mainContainer.textContent = '';

  let holidayName = document.createElement('p');
  let holidayDate = document.createElement('p');
  holidayName.textContent = nextHoliday.name;
  holidayDate.textContent = new Date(nextHoliday.date).toLocaleDateString('en-US', dateOptions);

  mainContainer.appendChild(holidayName);
  mainContainer.appendChild(holidayDate);
}

const buildSubsequentHoliday = (nextHolidays, indexForHolidays) => {
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let mainContainer = document.getElementById('nextHolidayContainer');
  mainContainer.textContent = '';

  let holidayName = document.createElement('p');
  let holidayDate = document.createElement('p');
  holidayName.textContent = nextHolidays[indexForHolidays].name;
  holidayDate.textContent = new Date(nextHolidays[indexForHolidays].date).toLocaleDateString('en-US', dateOptions);
  mainContainer.appendChild(holidayName);
  mainContainer.appendChild(holidayDate);
}

const buildNextLongWeekend = (nextLongWeekends, indexForLongWeekends) => {
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let mainContainer = document.getElementById('nextLongWeekendContainer');
  mainContainer.textContent = '';

  let holidayName = document.createElement('p');
  let holidayDate = document.createElement('p');
  holidayName.textContent = nextLongWeekends[indexForLongWeekends].name;
  holidayDate.textContent = new Date(nextLongWeekends[indexForLongWeekends].date).toLocaleDateString('en-US', dateOptions);
  mainContainer.appendChild(holidayName);
  mainContainer.appendChild(holidayDate);
}

export {
  buildNextHoliday,
  buildSubsequentHoliday,
  buildNextLongWeekend,
};

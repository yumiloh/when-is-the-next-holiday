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

const buildTimeline = (timelineId, dateObjects) => {
  if ("content" in document.createElement("template")) {
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let currentDate = new Date();
    const container = document.querySelector(`#${timelineId}`);
    const template = document.querySelector("#timeline-template");

    dateObjects.forEach(({ date, name }) => {
      const nextDate = new Date(date);
      const dayDifference = Math.ceil((nextDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
      const clone = template.content.cloneNode(true);
      const daysLeft = clone.querySelector('[data-name="days-left"]');
      const holidayName = clone.querySelector('[data-name="holiday-name"]');
      const holidayDate = clone.querySelector('[data-name="holiday-date"]');

      daysLeft.textContent = `In ${dayDifference} days`;
      holidayName.textContent = name;
      holidayDate.textContent = new Date(date).toLocaleDateString('en-US', dateOptions);
    
      container.appendChild(clone);
    });
  }
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
  buildTimeline,
  buildNextLongWeekend,
  buildSubsequentHoliday,
};

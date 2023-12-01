let index = 0;

async function getHolidays(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
                            .then(response => response.json())
                            // .then(data => {debugger; console.log(JSON.stringify(data));})
                            .catch(error => console.error("Error fetching data", error));

    const currentDate = new Date();
    const nextHolidays = holidays.holidays.find(holiday => new Date(holiday.date) > currentDate);
    console.log(nextHolidays);
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let mainContainer = document.getElementById('nextHolidayContainer');
    mainContainer.textContent = '';
    let holidayName = document.createElement('p');
    let holidayDate = document.createElement('p');
    holidayName.textContent = nextHolidays.name;
    holidayDate.textContent = new Date(nextHolidays.date).toLocaleDateString('en-US', dateOptions);
    mainContainer.appendChild(holidayName);
    mainContainer.appendChild(holidayDate);
    index = 0;
}

async function getSubsequentHoliday(){
    const holidays = await fetch('holidays.json', { mode: 'no-cors'})
    .then(response => response.json())
    .catch(error => console.error("Error fetching data", error));
    const currentDate = new Date();
    const nextHolidays = holidays.holidays.filter(holiday => new Date(holiday.date) > currentDate)
    console.log(nextHolidays[index])
    index++;
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let mainContainer = document.getElementById('nextHolidayContainer');
    mainContainer.textContent = '';
    let holidayName = document.createElement('p');
    let holidayDate = document.createElement('p');
    holidayName.textContent = nextHolidays[index].name;
    holidayDate.textContent = new Date(nextHolidays[index].date).toLocaleDateString('en-US', dateOptions);
    mainContainer.appendChild(holidayName);
    mainContainer.appendChild(holidayDate);
}

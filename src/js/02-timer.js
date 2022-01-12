import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css'

const start = document.querySelector('[data-start]');
const selector = document.querySelector('#datetime-picker');

const Days = document.querySelector('[data-days]');
const Hours = document.querySelector('[data-hours]');
const mins = document.querySelector('[data-minutes]');
const secs = document.querySelector('[data-seconds]');

let selectedTime = 0;
start.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0].getTime();
      const currentDate = this.config.defaultDate.getTime();
      if(currentDate > selectedDate){
          alert('Please choose a date in future');
          return;
      }
      selectedTime = selectedDate[0];
      start.disabled = false;
    },
  };
  const datePicker = flatpickr('#datetime-picker', options);

    function updateTimer({days, hours, minutes, seconds }) {
      Days.textContent = days;
      Hours.textContent = hours;
      mins.textContent = minutes;
      secs.textContent = seconds;
   
    }
    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = pad(Math.floor(ms / day));
        // Remaining hours
        const hours = pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }
      function pad(value){
          return String(value).padStart(2, '0');
      }
      start.addEventListener('click', setTimer);
      function  setTimer() {
        setInterval(() => {
            const currentTime = Date.now();
           const time = datePicker.selectedDates[0] - currentTime;
           const timeComponents = convertMs(time);
           updateTimer(timeComponents, time);

      }, 1000);
    }
      
    
   
  

 
  

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

// flatpickr("#datetime-picker", { options });


const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
       if (selectedDates[0] < options.defaultDate) {
         Notify.failure("Please choose a date in the future");
       } else {
           options.defaultDate = selectedDates[0];
           buttonStart.removeAttribute("disabled");
     }
   },
 };



const refs = {
   generalIn : document.querySelector("input"),
   startBut : document.querySelector("[data-start]"),
   timerDiv : document.querySelector(".timer"),
   fieldDiv : document.querySelector(".field") ,
   daysEl : document.querySelector("[data-days]"),
   hoursEl : document.querySelector("[data-hours"),
   minutesEl : document.querySelector("[data-minutes]"),
   secondsEl : document.querySelector("data-seconds"),
}

let selectDate = null;
let currentDate = null



refs.startBut.addEventListener("click",submitBut)
refs.generalIn.addEventListener("input",inputCont)

refs.startBut.setAttribute("disabled",)



function submitBut (evt) {
selectDate = new Date(evt.currentTarget.value)
currentDate = Data.now()
selectDate - currentDate >= 0 ? refs.startBut.removeAttribute("disabled",) : Notiflix.Notify.failure('Please choose a date in the future')

}


function inputCont () {
setInterval(timer,1000)
refs.startBut.setAttribute("disabled")
}


function timer () {
const diff = selectDate - Data.now()

const days = Math.floor((diff/(1000 * 60 * 60 * 24)));
const hours = Math.floor((diff/(1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff/(1000 * 60)) % 60);
const seconds = Math.floor((diff/(1000)) % 60);


refs.daysEl.textContent = days;
refs.hoursEl.textContent = minutes;
refs.minutesEl.textContent = seconds;
refs.secondsEl.textContent = seconds;
}
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minElement = document.getElementById("mins");
const secElement = document.getElementById("secs"); 

const eventDate = new Date("Aug 30, 2023 20:30:00").getTime();

function countdown() {
    const currentDate = new Date().getTime();
    const totalSeconds = (eventDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60; 
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minElement.innerHTML = formatTime(mins);
    secElement.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

countdown();

setInterval(countdown, 1000);



const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach(el => {
    el.addEventListener("click", () => toggleModal());
});

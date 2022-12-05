const view = document.querySelector(".view");
const viewSvg = document.querySelector(".svg");
const search = document.querySelector("svg");
const viewMoreBox = document.querySelector(".info-card");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const viewLess = document.querySelector(".less");

const currTime = () => {
    const currDate = new Date();
    const localTime = currDate.toLocaleTimeString();
    time.innerHTML = localTime;
};

const currDay = () => {
    const day = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const today = day.toLocaleDateString('en-US', options);
    date.innerHTML = today;
};

currDay();

setInterval(currTime, 1000);

view.addEventListener("click", ()=>{
    viewSvg.classList.toggle("rotate");
    viewMoreBox.classList.toggle("visible");
    view.classList.toggle("less");
    if(view.classList.contains("less")){
        view.innerHTML = "View Less";
    }else{
        view.innerHTML = "View More";
    }
});

viewSvg.addEventListener("click", ()=>{
    viewSvg.classList.toggle("rotate");
    viewMoreBox.classList.toggle("visible");
    view.classList.toggle("less");
    if(view.classList.contains("less")){
        view.innerHTML = "View Less";
    } else{
        view.innerHTML = "View More";
    }
});
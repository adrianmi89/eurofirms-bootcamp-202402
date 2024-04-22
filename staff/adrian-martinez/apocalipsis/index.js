function paint(days, hours, minutes, seconds){

    const htmlDays = document.querySelector("#days-value");
    const htmlHours = document.querySelector("#hours-value");
    const htmlMinutes = document.querySelector("#minutes-value");
    const htmlSeconds = document.querySelector("#seconds-value");

    htmlDays.innerText = days;
    //Mediante el operador ternario le diremos que nos añada un 0 cuando el tiempo tenga solo un dígito
    htmlHours.innerText = hours > 9 ? minutes : `0${ hours }`;
    htmlMinutes.innerText = minutes > 9 ? seconds : `0${ minutes }`;
    htmlSeconds.innerText = seconds > 9 ? seconds : `0${ seconds }`;
}

function updateCountDown(){

    const actualDate = Date.now() / 1000;
    const doomsDay = 2147483647;

    const secondsLeft = doomsDay - actualDate;
    const minutesLeft = secondsLeft / 60;
    const hoursLeft = minutesLeft / 60;
    const daysLeft = hoursLeft / 24;

    const secondsLeftToPrint = Math.floor(secondsLeft % 60);
    const minutesLeftToPrint = Math.floor(minutesLeft % 60);
    const hoursLeftToPrint = Math.floor(hoursLeft % 60);
    const daysLeftToPrint = Math.floor(daysLeft);

    return { daysLeftToPrint, hoursLeftToPrint, minutesLeftToPrint, secondsLeftToPrint };
}

setInterval(() => {

    const timeLeft = updateCountDown();
    const { daysLeftToPrint, hoursLeftToPrint, minutesLeftToPrint, secondsLeftToPrint } = timeLeft;

    paint( daysLeftToPrint, hoursLeftToPrint, minutesLeftToPrint, secondsLeftToPrint );
}, 1000)


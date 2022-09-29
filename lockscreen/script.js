function startTime() {
    const today = new Date();
    let hour = checkTime(today.getHours());
    let minute = checkTime(today.getMinutes());

    //let day = today.toLocaleDateString("en-UK", {weekday: 'short'});
    let month = today.toLocaleDateString("en-UK", {month: 'short'});
    let date = today.getDate();
    let year = today.getFullYear();

    document.getElementById('hours-minutes').innerHTML = hour + " : " + minute;
    document.getElementById('date').innerHTML = year + " " + month + " " + date;

    setTimeout(startTime, 0);
}

const checkTime = i => i < 10 ? "0" + i : i;
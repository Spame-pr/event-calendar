const mainFunc = function () {

    let selectName = document.getElementById('nameSelect'),
        daySelect = document.getElementById('daySelect'),
        timeSelect = document.getElementById('timeSelect'),
        eventName = document.getElementById('eventSelect');
        
    window.onsubmit = function (e) {

        let nameVal = selectName.value,
            dayVal = daySelect.value,
            timeVal = timeSelect.value,
            eventVal = eventName.value;


        const objVal = {
            event: eventVal,
            name: nameVal,
            day: dayVal,
            time: timeVal

        }
        window.localStorage.setItem(eventVal, JSON.stringify(objVal))
    }
}

export default mainFunc;

//Here i get information from the form ,write it to the  object and object record into the localStorage
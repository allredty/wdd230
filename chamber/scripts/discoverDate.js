function getMessage() {
    // get current date
    let currentDate = new Date();
    let storedDate;
    let massage;

    //get the date from the local storage
    let date = localStorage.getItem('date');

    // compare dates 
    if (date) {
        storedDate = new Date(parseInt(date));
    }

    if (date) {
        let differenceInTime = currentDate.getTime() - storedDate.getTime();

        if (differenceInTime < 8640000) {
            message = 'Back so soon! Awesome!'
        } else {
            let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
            message =`You last visited ${differenceInDays} days ago.`;
        }
    } else {
            message = 'Welcome! Let us know if you have any questions.'
        }

    //store date in localk storage
    localStorage.setItem('date', currentDate.getTime());

    return message
}

let displayMessage = getMessage();
document.querySelector('#message').textContent = displayMessage;
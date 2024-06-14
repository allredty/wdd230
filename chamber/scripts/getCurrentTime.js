
// Function to get the current date and time in the required format
function getCurrentTimestamp() {
    const now = new Date();
    return now.toISOString(); // ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ
}

// Set the value of the hidden timestamp field when the form is loaded
document.getElementById('timestamp').value = getCurrentTimestamp();

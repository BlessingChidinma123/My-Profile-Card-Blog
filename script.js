// JavaScript to show current UTC time
function updateUTC() {
    const timeElement = document.getElementById('utcTime');  // Find the element by ID
    const currentTime = new Date().toISOString();  // Get current time in ISO format (UTC)
    timeElement.innerText = Current UTC Time: ${currentTime};  // Display it on the page
}

// Call the function to update time when the page loads
window.onload = updateUTC;  // Ensure the function runs after the page has loaded
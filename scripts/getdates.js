// Get the current year dynamically and populate the element with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date dynamically and populate the element with id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
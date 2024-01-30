// D. Auto-changing country names
const placeNames = ["Iraq", "Pakistan", "China", "Ukrine", "Afghanistan"];
let currentIndex = 0;

setInterval(() => {
    document.getElementById("place-name").innerText = placeNames[currentIndex];
    currentIndex = (currentIndex + 1) % placeNames.length;
}, 2000);  // Increased the interval to 2 seconds for better readability

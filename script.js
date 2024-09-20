// Load saved coin count from local storage if it exists
let coinCount = localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;

// Update displayed coin count when page loads
coinCounter.innerText = coinCount;

// Update local storage every time the coin count changes
tapButton.addEventListener('click', function() {
  coinCount++;
  coinCounter.innerText = coinCount;
  localStorage.setItem('coinCount', coinCount);
});



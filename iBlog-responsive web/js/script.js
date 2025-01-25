// Show the navigation menu when the bar (hamburger) icon is clicked
document.querySelector('.bar').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.style.top = '0'; // Slide it in from the top (show it)
    // document.querySelector('.bar').style.display ="none"
});

// Close the navigation menu when the close (cross) button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.style.top = '-100%'; // Slide it back up (hide it)
    document.querySelector('.bar').style.display ="block"

});


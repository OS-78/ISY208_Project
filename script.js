if (
    window.location.pathname.endsWith('/') || 
    window.location.pathname.endsWith('/index.html')
) {
    var userName = prompt("Enter your name:");
    if (!userName) {
        document.getElementById("User").innerHTML = "Guest";
    } else {
        document.getElementById("User").innerHTML = userName.trim();
    }
}


function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

function darkMode() {
    const themeButton = document.getElementById('mode-toggle');
    toggleTheme();

    if (themeButton.innerHTML === '🌙') {
        themeButton.innerHTML = '🌞';
    } else {
        themeButton.innerHTML = '🌙';
    }
}

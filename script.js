if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    var userName = prompt("Enter your name");
    if (userName == null || userName == "") {
        document.getElementById("User").innerHTML = "Guest";
    }
    else{
        document.getElementById("User").innerHTML = userName;
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

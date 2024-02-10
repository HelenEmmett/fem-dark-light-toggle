const darkRadio = document.getElementById('dark');
const lightRadio = document.getElementById('light');

document.getElementById("dark").addEventListener("click", setDarkMode);
document.getElementById("light").addEventListener("click", setLightMode);

function setDarkMode() {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
};

function setLightMode() {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
};


function colorModeFromLocalStorage() {
    return localStorage.getItem('colorMode');
};

function colorModeFromPreferences() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light' // If preference is set or does not match anything (light is default)
};

function switchMode() {
    const color = colorModeFromLocalStorage() || colorModeFromPreferences();
    color == 'dark' ? darkRadio.click() : lightRadio.click();
};


// Check if user preference is set to dark mode, and adjust checkbox
switchMode();
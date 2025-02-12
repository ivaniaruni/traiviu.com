const launchDate = new Date("March 1, 2025 00:00:00").getTime();
const correctCode = "TraiviuCode7789";

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft <= 0) {
        window.location.href = "./traiviu-series.html";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function checkAccess() {
    const userInput = document.getElementById("code-input").value;
    if (userInput === correctCode) {
        window.location.href = "./traiviu-series.html";
    } else {
        alert("Incorrect Code");
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
document.getElementById("access-form").style.display = "block";

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'i' || event.key === 'j')) {
        event.preventDefault();
    }
});
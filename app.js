const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    
    hours.textContent = `☀️${h}`;
    minutes.textContent = `⏰${m}`;
    seconds.textContent = `⚙️${s}`;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
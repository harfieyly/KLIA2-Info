function updateClock() {
    const now = new Date();
    // Format masa kepada HH:MM:SS
    const timeString = now.toLocaleTimeString('en-GB'); 
    document.getElementById('klia-clock').textContent = timeString;
}

// Jalankan fungsi updateClock setiap 1000ms (1 saat)
setInterval(updateClock, 1000);

// Panggil sekali masa page mula-mula buka
updateClock();
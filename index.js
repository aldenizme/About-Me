
    document.getElementById("footer-year").innerHTML = `&copy; triadalden ${new Date().getFullYear()}`;


    function updateClock() {
            const now = new Date();
            document.getElementById("clock").textContent = now.toLocaleTimeString();
        }

        setInterval(updateClock, 1000);
        updateClock();

let pin = "";
const correctPin = "081824";

function press(number) {
    if (pin.length < 6) {
        pin += number;
        updateDots();
    }
}

function clearPin() {
    pin = "";
    updateDots();
    document.getElementById("message").innerHTML = "";
}

function updateDots() {
    for (let i = 1; i <= 6; i++) {
        const dot = document.getElementById(`dot${i}`);
        if (i <= pin.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
    }
}

function unlock() {
    const message = document.getElementById("message");
    
    if (pin === correctPin) {
        message.className = "message correct";
        message.innerHTML = `
            <div class="success-content">
                <h2>Access Granted!</h2>
                <img src="content://com.android.providers.media.documents/document/image%3A1000028101" alt="Gift Box">
                <p>Tap the icon</p>
            </div>
        `;

    } else {
        message.className = "message wrong";
        message.innerHTML = "Hmm... try again. ♡";
        setTimeout(() => {
            pin = "";
            updateDots();
        }, 800);
    }
}

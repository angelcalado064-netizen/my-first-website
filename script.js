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
        const dot = document.getElementById("dot" + i);

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
        message.innerHTML = "You remembered. ♡";

    } else {

        message.className = "message wrong";
        message.innerHTML = "Hmm... try again. ♡";

        setTimeout(function() {
            pin = "";
            updateDots();
        }, 800);
    }
}

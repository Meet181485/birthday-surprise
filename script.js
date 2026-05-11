const button = document.querySelector(".btn");

button.addEventListener("mousemove", (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    button.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
    #ff4d8d,
    #7b61ff)`;

});

/* Typing Animation */

document.addEventListener("DOMContentLoaded", () => {

    new Typed(".typing", {

        strings: [
            "A small surprise made with love ❤️",
            "Every moment with you feels magical ✨",
            "Happy Birthday to the most special person 💖"
        ],

        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true

    });

});

/* Loader */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2000);

});

/* Heart Rain */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.querySelector(".heart-rain")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 300);

/* Password Unlock */

const unlockBtn =
    document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", () => {

    const password =
        document.getElementById("passwordInput").value;

    /*
    CHANGE PASSWORD HERE
    */

    if (password === "Butterfly") {

        document.getElementById(
            "passwordScreen"
        ).style.display = "none";

        if (typeof confetti !== "undefined") {

            confetti({
                particleCount: 150,
                spread: 100
            });

        }
    } else {

        alert("Wrong Password ❤️");

    }

});

/* Fireworks */

setTimeout(() => {

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

}, 3000);

/* MUSIC PLAYER */

window.onload = function(){

    const music =
    document.getElementById("bgMusic");

    const musicBtn =
    document.getElementById("musicBtn");

    if(musicBtn && music){

        musicBtn.onclick = function(){

            music.play();

            musicBtn.innerHTML = "💖";
        };

    }

};
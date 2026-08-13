// ==========================================
// MISS MUNTAHA — INDEX PAGE
// ==========================================


// ==========================================
// WELCOME TYPEWRITER
// ==========================================

const lines = [
    "Some people come into our lives...",
    "And quietly make everything easier...",
    "This little journey is for someone very special...",
    "Miss Muntaha ❤️"
];

const text = document.getElementById("typewriter");

let line = 0;
let letter = 0;

function typeWriter() {

    if (!text) return;

    if (line >= lines.length) return;

    if (letter < lines[line].length) {

        text.innerHTML += lines[line].charAt(letter);

        letter++;

        setTimeout(typeWriter, 55);

    } else {

        text.innerHTML += "<br><br>";

        line++;
        letter = 0;

        setTimeout(typeWriter, 700);

    }

}

typeWriter();


// ==========================================
// STARS
// ==========================================

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 220; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        stars.appendChild(star);
    }

}


// ==========================================
// FLOWERS / PETALS
// ==========================================

const petals = document.getElementById("petals");

if (petals) {

    for (let i = 0; i < 35; i++) {

        const flower = document.createElement("div");

        flower.innerHTML = "🌸";

        flower.className = "petal";

        flower.style.left =
            Math.random() * 100 + "%";

        flower.style.animationDuration =
            8 + Math.random() * 8 + "s";

        flower.style.fontSize =
            18 + Math.random() * 18 + "px";

        flower.style.animationDelay =
            Math.random() * 6 + "s";

        petals.appendChild(flower);

    }

}


// ==========================================
// FLOATING HEARTS
// ==========================================

const hearts = document.getElementById("hearts");

const heartSymbols = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "✨"
];

if (hearts) {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            heartSymbols[
                Math.floor(
                    Math.random() * heartSymbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            7 + Math.random() * 8 + "s";

        heart.style.animationDelay =
            Math.random() * 8 + "s";

        heart.style.fontSize =
            12 + Math.random() * 18 + "px";

        hearts.appendChild(heart);

    }

}


// ==========================================
// START / BEGIN JOURNEY BUTTON
// ==========================================

const startBtn =
    document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", function () {

        window.location.href =
            "pages/page1.html";

    });

}
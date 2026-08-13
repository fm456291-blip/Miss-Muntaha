// ==========================================
// PAGE 3 — MISS MUNTAHA BIRTHDAY PAGE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const openLetterBtn = document.getElementById("openLetter");
    const letter = document.getElementById("letter");
    const ending = document.getElementById("ending");
    const music = document.getElementById("birthdayMusic");
    const flowers = document.getElementById("flowers");
    const sparkles = document.getElementById("sparkles");

    // ==========================================
    // BACKGROUND MUSIC
    // ==========================================

    if (music) {

        music.volume = 0.35;

        // Try autoplay
        music.play().catch(() => {});

        // Start on first interaction if blocked
        document.addEventListener("click", () => {

            if (music.paused) {

                music.play().catch(() => {});

            }

        }, { once: true });

    }

    // ==========================================
    // FLOWERS
    // ==========================================

    const flowerIcons = [
        "🌷",
        "🌸",
        "❀",
        "✿",
        "💮",
        "♡"
    ];

    if (flowers) {

        for (let i = 0; i < 35; i++) {

            const flower = document.createElement("div");

            flower.className = "flower";

            flower.innerHTML =
                flowerIcons[
                    Math.floor(Math.random() * flowerIcons.length)
                ];

            flower.style.left = Math.random() * 100 + "%";

            flower.style.fontSize =
                (15 + Math.random() * 15) + "px";

            flower.style.animationDuration =
                (8 + Math.random() * 8) + "s";

            flower.style.animationDelay =
                Math.random() * 5 + "s";

            flowers.appendChild(flower);

        }

    }

    // ==========================================
    // SPARKLES
    // ==========================================

    if (sparkles) {

        for (let i = 0; i < 70; i++) {

            const sparkle = document.createElement("div");

            sparkle.className = "sparkle";

            sparkle.style.left =
                Math.random() * 100 + "%";

            sparkle.style.top =
                Math.random() * 100 + "%";

            sparkle.style.animationDelay =
                Math.random() * 3 + "s";

            sparkles.appendChild(sparkle);

        }

    }

    // ==========================================
    // OPEN LETTER
    // ==========================================

    if (openLetterBtn) {

        openLetterBtn.addEventListener("click", () => {

            // Music
            if (music && music.paused) {

                music.play().catch(() => {});

            }

            // Hide Button
            openLetterBtn.style.opacity = "0";
            openLetterBtn.style.transform = "scale(.8)";

            setTimeout(() => {

                openLetterBtn.style.display = "none";

                // Show Letter
                letter.classList.remove("hidden");

                letter.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }, 350);

        });

    }

    // ==========================================
    // SHOW FINAL MESSAGE
    // ==========================================

    if (letter && ending) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        ending.classList.remove("hidden");

                        ending.scrollIntoView({

                            behavior: "smooth",

                            block: "center"

                        });

                    }, 2000);

                }

            });

        }, {

            threshold: 0.4

        });

        observer.observe(letter);

    }

    // ==========================================
    // PHOTO ANIMATION
    // ==========================================

    document.querySelectorAll(".polaroid").forEach((photo, index) => {

        photo.style.animationDelay = (index * 0.2) + "s";

    });

});

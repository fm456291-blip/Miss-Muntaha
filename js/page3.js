document.addEventListener("DOMContentLoaded", function () {

    console.log("PAGE 3 JS LOADED");

    const openLetterBtn = document.getElementById("openLetter");
    const letter = document.getElementById("letter");
    const ending = document.getElementById("ending");
    const music = document.getElementById("birthdayMusic");
    const flowers = document.getElementById("flowers");
    const sparkles = document.getElementById("sparkles");


    // ==========================================
    // MUSIC
    // ==========================================

    if (music) {

        music.volume = 0.35;

    }


    // ==========================================
    // FLOWERS
    // ==========================================

    if (flowers) {

        const flowerSymbols = [
            "🌷",
            "🌸",
            "✿",
            "❀",
            "♡",
            "💮"
        ];

        for (let i = 0; i < 35; i++) {

            const flower = document.createElement("div");

            flower.className = "flower";

            flower.innerHTML =
                flowerSymbols[
                    Math.floor(
                        Math.random() * flowerSymbols.length
                    )
                ];

            flower.style.left =
                Math.random() * 100 + "%";

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
    // OPEN DUA LETTER
    // ==========================================

    if (openLetterBtn && letter) {

        openLetterBtn.addEventListener("click", function () {

            console.log("DUA BUTTON CLICKED");


            // Start music
            if (music) {

                music.play().catch(function (error) {

                    console.log("Music blocked:", error);

                });

            }


            // Hide button
            openLetterBtn.style.opacity = "0";
            openLetterBtn.style.transform = "scale(0.8)";


            setTimeout(function () {

                openLetterBtn.style.display = "none";


                // SHOW LETTER
                letter.classList.remove("hidden");

                console.log("LETTER OPENED");


                // Scroll to letter
                setTimeout(function () {

                    letter.scrollIntoView({

                        behavior: "smooth",

                        block: "center"

                    });

                }, 200);


            }, 350);

        });

    } else {

        console.log("BUTTON OR LETTER NOT FOUND");

    }


    // ==========================================
    // ENDING MESSAGE
    // ==========================================

    if (letter && ending) {

        const observer = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        setTimeout(function () {

                            ending.classList.remove("hidden");

                        }, 1800);

                    }

                });

            },

            {
                threshold: 0.35
            }

        );

        observer.observe(letter);

    }

});

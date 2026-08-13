// ==========================================
// PAGE 3 — BIRTHDAY DUAS & WISHES
// MISS MUNTAHA 🌷
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ELEMENTS
    // ==========================================

    const openLetterBtn =
        document.getElementById("openLetter");

    const letter =
        document.getElementById("letter");

    const ending =
        document.getElementById("ending");

    const music =
        document.getElementById("birthdayMusic");

    const flowers =
        document.getElementById("flowers");

    const sparkles =
        document.getElementById("sparkles");


    // ==========================================
    // MUSIC
    // ==========================================

    if (music) {

        music.volume = 0.35;

        document.addEventListener(
            "click",
            function startMusic() {

                music.play().catch(function () {});

            },
            {
                once: true
            }
        );

    }


    // ==========================================
    // FLOATING FLOWERS
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

            const flower =
                document.createElement("div");

            flower.className = "flower";


            flower.innerHTML =
                flowerSymbols[
                    Math.floor(
                        Math.random() *
                        flowerSymbols.length
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

            const sparkle =
                document.createElement("div");


            sparkle.className =
                "sparkle";


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

    if (openLetterBtn && letter) {

        openLetterBtn.addEventListener(
            "click",
            function () {


                // Start music
                if (music) {

                    music.play().catch(function () {});

                }


                // Button animation
                openLetterBtn.style.opacity = "0";

                openLetterBtn.style.transform =
                    "scale(.8)";


                setTimeout(function () {


                    // Hide button
                    openLetterBtn.style.display =
                        "none";


                    // Show letter
                    letter.classList.remove(
                        "hidden"
                    );


                    // Scroll to letter
                    setTimeout(function () {

                        letter.scrollIntoView({

                            behavior: "smooth",

                            block: "center"

                        });

                    }, 200);


                }, 350);

            }
        );

    }


    // ==========================================
    // FINAL MESSAGE
    // ==========================================

    if (letter && ending) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                setTimeout(
                                    function () {

                                        ending.classList.remove(
                                            "hidden"
                                        );

                                    },
                                    1800
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.35
                }

            );


        observer.observe(letter);

    }


    // ==========================================
    // PHOTO EFFECT
    // ==========================================

    const photos =
        document.querySelectorAll(
            ".polaroid"
        );


    photos.forEach(
        function (photo, index) {

            photo.style.animationDelay =
                (index * 0.2) + "s";

        }
    );


});

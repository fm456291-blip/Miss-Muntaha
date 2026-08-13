// ==========================================
// PAGE 2 — MUNTaha HEART PUZZLE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const puzzle = document.getElementById("puzzle");
    const successBox = document.getElementById("successBox");
    const nextBtn = document.getElementById("nextBtn");
    const gameMessage = document.getElementById("gameMessage");
    const music = document.getElementById("pageMusic");
    const heartBackground = document.getElementById("heartBackground");

    const imagePath = "../assets/images/muntaha1.jpg";

    const TOTAL = 9;

    let selectedPiece = null;


    // ==========================================
    // FLOATING HEARTS
    // ==========================================

    if (heartBackground) {

        for (let i = 0; i < 35; i++) {

            const heart = document.createElement("div");

            heart.className = "floating-heart";
            heart.innerHTML = "♥";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.fontSize =
                (12 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (8 + Math.random() * 10) + "s";

            heart.style.animationDelay =
                Math.random() * 8 + "s";

            heartBackground.appendChild(heart);
        }
    }


    // ==========================================
    // MUSIC
    // ==========================================

    if (music) {

        music.volume = 0.35;

        document.addEventListener("click", function playMusic() {

            music.play().catch(() => {});

            document.removeEventListener(
                "click",
                playMusic
            );

        });

    }


    // ==========================================
    // CREATE PUZZLE
    // ==========================================

    function createPuzzle() {

        puzzle.innerHTML = "";

        selectedPiece = null;

        let positions = [];

        for (let i = 0; i < TOTAL; i++) {
            positions.push(i);
        }


        // Shuffle until not already solved

        do {

            positions.sort(
                () => Math.random() - 0.5
            );

        } while (
            positions.every(
                (value, index) =>
                    value === index
            )
        );


        // Create pieces

        positions.forEach(function (correctPosition) {

            const piece = document.createElement("div");

            piece.className = "puzzle-piece";

            piece.dataset.correct =
                correctPosition;


            // Image

            piece.style.backgroundImage =
                `url("${imagePath}")`;


            // Image position

            const row =
                Math.floor(correctPosition / 3);

            const col =
                correctPosition % 3;


            piece.style.backgroundPosition =
                `${col * 50}% ${row * 50}%`;


            puzzle.appendChild(piece);

        });


        if (gameMessage) {

            gameMessage.textContent =
                "Click one piece, then click another piece to swap them. 🧩❤️";

        }

    }


    // ==========================================
    // CLICK HANDLER
    // ==========================================

    puzzle.addEventListener("click", function (event) {

        const clickedPiece =
            event.target.closest(".puzzle-piece");


        // Ignore clicks outside pieces

        if (!clickedPiece) return;


        // ======================================
        // FIRST PIECE
        // ======================================

        if (!selectedPiece) {

            selectedPiece = clickedPiece;

            selectedPiece.classList.add("selected");


            if (gameMessage) {

                gameMessage.textContent =
                    "Now click another piece to swap ❤️";

            }

            return;

        }


        // ======================================
        // CLICK SAME PIECE AGAIN
        // ======================================

        if (selectedPiece === clickedPiece) {

            selectedPiece.classList.remove(
                "selected"
            );

            selectedPiece = null;


            if (gameMessage) {

                gameMessage.textContent =
                    "Choose a piece to start. 🧩";

            }

            return;

        }


        // ======================================
        // SECOND PIECE → SWAP
        // ======================================

        swapPieces(
            selectedPiece,
            clickedPiece
        );


        // Remove selection

        selectedPiece.classList.remove(
            "selected"
        );

        selectedPiece = null;


        if (gameMessage) {

            gameMessage.textContent =
                "Nice! Keep arranging the pieces ❤️";

        }


        // Check if complete

        checkPuzzle();

    });


    // ==========================================
    // SWAP — NEW RELIABLE METHOD
    // ==========================================

    function swapPieces(piece1, piece2) {

        const allPieces =
            Array.from(
                puzzle.querySelectorAll(
                    ".puzzle-piece"
                )
            );


        const index1 =
            allPieces.indexOf(piece1);

        const index2 =
            allPieces.indexOf(piece2);


        if (
            index1 === -1 ||
            index2 === -1
        ) {
            return;
        }


        // Swap in array

        const temp =
            allPieces[index1];

        allPieces[index1] =
            allPieces[index2];

        allPieces[index2] =
            temp;


        // Put pieces back in new order

        puzzle.replaceChildren(
            ...allPieces
        );

    }


    // ==========================================
    // CHECK PUZZLE
    // ==========================================

    function checkPuzzle() {

        const allPieces =
            Array.from(
                puzzle.querySelectorAll(
                    ".puzzle-piece"
                )
            );


        let correct = true;


        allPieces.forEach(
            function (piece, index) {

                if (
                    Number(piece.dataset.correct)
                    !== index
                ) {

                    correct = false;

                }

            }
        );


        // ======================================
        // PUZZLE COMPLETE
        // ======================================

        if (correct) {

            puzzle.style.pointerEvents =
                "none";


            if (gameMessage) {

                gameMessage.textContent =
                    "You put every piece back together. ❤️";

            }


            setTimeout(function () {

                if (successBox) {

                    successBox.classList.remove(
                        "hidden"
                    );


                    successBox.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }, 700);

        }

    }


    // ==========================================
    // NEXT PAGE
    // ==========================================

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                if (music) {
                    music.pause();
                }

                window.location.href =
                    "page3.html";

            }
        );

    }


    // ==========================================
    // START
    // ==========================================

    createPuzzle();

});
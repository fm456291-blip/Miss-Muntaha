// ==========================================
// PAGE 1 - MISS MUNTAHA
// Music Control
// ==========================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music) {

    music.volume = 0.35;

    // Try autoplay
    music.play().catch(() => {
        console.log("Music waiting for user interaction.");
    });

}


// If browser blocks autoplay,
// start music on first interaction
document.addEventListener("click", () => {

    if (music && music.paused) {
        music.play().catch(() => {});
    }

}, { once:true });


// Music button
if (musicBtn) {

    musicBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        if (music.paused) {

            music.play();
            musicBtn.innerHTML = "🎵";

        } else {

            music.pause();
            musicBtn.innerHTML = "🔇";

        }

    });

}
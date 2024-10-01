// Toggle background music on/off
const bgMusic = document.getElementById('bg-music');
function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        alert("Music is playing 🎶");
    } else {
        bgMusic.pause();
        alert("Music is paused 🎶");
    }
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

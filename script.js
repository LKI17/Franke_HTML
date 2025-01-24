
// JavaScript für den Scroll-to-Top-Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Button anzeigen/verstecken
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Nach oben scrollen
scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const backToTopButton = document.getElementById('backToTop');

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
backToTopButton.addEventListener('click', scrollToTop);
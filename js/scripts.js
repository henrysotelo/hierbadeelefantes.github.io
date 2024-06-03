function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('mobileMenu').addEventListener('click', function() {
    var nav = document.getElementById('navMenu');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});

function showImage(imageId) {
    const images = document.querySelectorAll('.section-content img');
    images.forEach(img => img.style.display = 'none');
    document.getElementById(imageId).style.display = 'block';
}

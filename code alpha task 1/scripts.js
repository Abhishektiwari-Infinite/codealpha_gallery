let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  images = Array.from(document.querySelectorAll('.gallery-item img'));
  currentIndex = images.findIndex(img => img === imgElement);

  document.getElementById('lightbox-img').src = imgElement.src;
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

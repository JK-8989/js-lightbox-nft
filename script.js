const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightbox-bg';
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll('img');

images.forEach((images) => {
  

  images.addEventListener('click', () => {
    
    lightboxBg.classList.add('active');
    const fullImage = document.createElement('img');
    fullImage.src = images.src;
    fullImage.id = 'full-image';

    lightboxBg.appendChild(fullImage);

  });

  lightboxBg.addEventListener('click', () => {
    lightboxBg.classList.remove('active');
  });  

  
});





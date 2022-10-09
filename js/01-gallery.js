import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsConteiner = document.querySelector('.gallery');
const itetemsGallaryMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsConteiner.insertAdjacentHTML('beforeend', itetemsGallaryMarkup);
galleryItemsConteiner.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    )
    .join('');
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(
    `
  	<img width="800" height="600" src="${evt.target.dataset.source}">
  `
  );

  instance.show();

  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    window.removeEventListener('keydown', onEscKeyPress);
    document.querySelector('.basicLightbox').remove();
  }
}
// console.log(galleryItems);

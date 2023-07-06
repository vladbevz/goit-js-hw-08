// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
// etap 1

const galleryList = document.querySelector('.gallery');
const li = document.querySelectorAll('li');
createImagesItems();

function createImagesItems() {
  const importImages = createImagesEl(galleryItems);
  galleryList.innerHTML = importImages.join('');
}
function createImagesEl(items) {
  return items.map(
    item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
  );
}

const lightbox = new SimpleLightbox('.gallery a');

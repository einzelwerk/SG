import { prev } from './Helpers';

const svgClose = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_970_5261)">
  <path d="M6.58691 6.74731L9.41534 9.57574" stroke="#0B0F16" stroke-linecap="round"/>
  <path d="M9.41504 6.74731L6.58661 9.57574" stroke="#0B0F16" stroke-linecap="round"/>
  <circle cx="8.00065" cy="7.99992" r="6.16667" stroke="#0B0F16"/>
  </g>
  <defs>
  <clipPath id="clip0_970_5261">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
</svg>      

`;

const file = document.querySelector('.js-attached-files');
const dt = new DataTransfer();
const attachedArea = document.querySelector('.attached-files-area');
const placeHolderText = document.querySelector('.main-form__file-placeholder-text');

function removeFile(DataTransfer, elem, e) {
  e.stopPropagation();
  const name = prev(elem, '.attached-files__item-name').innerHTML;
  elem.closest('.attached-files__item').remove();
  for (let i = 0; i < DataTransfer.items.length; i += 1) {
    if (name === dt.items[i].getAsFile().name) {
      DataTransfer.items.remove(i);
    }
  }
  file.files = DataTransfer.files;

  // eslint-disable-next-line no-use-before-define
  updateForm(DataTransfer);
}

function listener() {
  document.querySelectorAll('.attached-files__item-delete').forEach((elem) => {
    elem.addEventListener('click', (e) => removeFile(dt, elem, e));
    elem.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        removeFile(dt, elem);
        e.preventDefault();
      }
    });
  });
}

function updateForm(DataTransfer) {
  if (DataTransfer.files.length > 0) {
    placeHolderText.classList.add('has-files');
    attachedArea.classList.add('has-files');
  } else {
    placeHolderText.classList.remove('has-files');
    attachedArea.classList.remove('has-files');
  }
  listener();
}

function addFiles(e) {
  for (let i = 0; i < e.target.files.length; i += 1) {
    const fileWrap = `<span class='attached-files__item-name'>${e.target.files[i].name}</span>`;
    const fileItem = document.createElement('span');
    fileItem.classList.add('attached-files__item');
    const fileArea = document.querySelector('.attached-files');
    fileItem.insertAdjacentHTML('beforeend', fileWrap);
    fileItem.insertAdjacentHTML(
      'beforeend',
      `<span class="attached-files__item-delete" role="button" tabindex="0" title="Datei löschen">${svgClose}</span>`
    );
    fileArea.append(fileItem);
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const fileS of e.target.files) {
    dt.items.add(fileS);
  }
  e.target.files = dt.files;
  updateForm(dt);
}

file?.addEventListener('change', (e) => addFiles(e));

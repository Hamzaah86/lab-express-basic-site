console.log('hello');

const pics = document.querySelector('.galleryPics');

pics.addEventListener('click', evt => {
  window.location.replace('http://wikipedia.org');
});

const pics2 = document.querySelector('.galleryPics2');

$(pics2).addEventListener('click', evt => {
  pics2.fadeOut('fast');
});

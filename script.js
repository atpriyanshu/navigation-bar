var navToggler = document.querySelector('header > .nav-toggle');
var links = document.querySelector('header > nav');

navToggler.addEventListener('click', function() {
  links.classList.toggle('block');
});

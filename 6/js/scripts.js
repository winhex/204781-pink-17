var pageHeader = document.querySelector('.page-header');
var navList = document.querySelector('.nav-list');
var navToggle = document.querySelector('.main-nav__toggle');
var backgroundOfMenu = document.querySelector('.intro');

pageHeader.classList.remove('page-header--opened');
pageHeader.classList.add('page-header--closed');
navList.classList.remove('nav-list--opened');
navList.classList.add('nav-list--closed');
navToggle.classList.remove('main-nav__toggle--opened');
navToggle.classList.add('main-nav__toggle--closed');
backgroundOfMenu.classList.remove('intro--opened');
backgroundOfMenu.classList.add('intro--closed');

  navToggle.addEventListener('click', function() {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      navList.classList.remove('nav-list--closed');
      navList.classList.add('nav-list--opened');
      navToggle.classList.remove('main-nav__toggle--closed');
      navToggle.classList.add('main-nav__toggle--opened');
      backgroundOfMenu.classList.remove('intro--closed');
      backgroundOfMenu.classList.add('intro--opened');
    } else {
      pageHeader.classList.remove('page-header--opened');
      pageHeader.classList.add('page-header--closed');
      navList.classList.remove('nav-list--opened');
      navList.classList.add('nav-list--closed');
      navToggle.classList.remove('main-nav__toggle--opened');
      navToggle.classList.add('main-nav__toggle--closed');
      backgroundOfMenu.classList.remove('intro--opened');
      backgroundOfMenu.classList.add('intro--closed');
    }
  });

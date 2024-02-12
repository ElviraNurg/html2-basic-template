/* в этот файл добавляет скрипты*/
const next = document.querySelector('.promo__button-next');
const prev = document.querySelector('.promo__button-prev');
const sliderItems = document.querySelectorAll('.promo__list-item');
const promoControls = document.querySelectorAll('.promo__controls');
const COLORS = ['flat-white', 'lavender', 'espresso'];
const checkButtonsStatus = () => {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slide__current')) {
      if (i === 0) {
        prev.setAttribute('disabled', 'true');
      } else {
        prev.removeAttribute('disabled');
      }
      if (i === sliderItems.length - 1) {
        next.setAttribute('disabled', 'true');
      } else {
        next.removeAttribute('disabled');
      }
    }
  }
};
const onLoadStatus = () => {
  checkButtonsStatus();
};
const swipSliderNext = () => {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slide__current') && i !== sliderItems.length - 1) {
      sliderItems[i].classList.remove('slide__current');
      sliderItems[i + 1].classList.add('slide__current');
      promoControls[i].classList.remove('promo__controls-active');
      promoControls[i + 1].classList.add('promo__controls-active');
      next.classList.remove(COLORS[i]);
      prev.classList.remove(COLORS[i]);
      next.classList.add(COLORS[i + 1]);
      prev.classList.add(COLORS[i + 1]);
      break;
    }
  }
};
const swipSliderPrev = () => {
  for (let i = sliderItems.length - 1; i >= 0; i--) {
    if (sliderItems[i].classList.contains('slide__current') && i !== 0) {
      sliderItems[i].classList.remove('slide__current');
      sliderItems[i - 1].classList.add('slide__current');
      promoControls[i].classList.remove('promo__controls-active');
      promoControls[i - 1].classList.add('promo__controls-active');
      next.classList.remove(COLORS[i]);
      prev.classList.remove(COLORS[i]);
      next.classList.add(COLORS[i - 1]);
      prev.classList.add(COLORS[i - 1]);
      break;
    }
  }
};
const swipOnPagination = (index) => {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slide__current')) {
      sliderItems[i].classList.remove('slide__current');
      promoControls[i].classList.remove('promo__controls-active');
      next.classList.remove(COLORS[i]);
      prev.classList.remove(COLORS[i]);
    }
    sliderItems[index].classList.add('slide__current');
    promoControls[index].classList.add('promo__controls-active');
    next.classList.add(COLORS[index]);
    prev.classList.add(COLORS[index]);
  }
};
document.addEventListener('click', onLoadStatus);
next.addEventListener('click', swipSliderNext);
prev.addEventListener('click', swipSliderPrev);
promoControls.forEach((item, index) => item.addEventListener('click', () => swipOnPagination(index)));

//Map

//Создание карты
const L = window.L;
const map = L.map('map-box')
  .setView({
    lat: 59.968322,
    lng: 30.317359,
  }, 20);
//Создание слоя карты
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  //копирайт
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../images/map_pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});
//Задаем главной иконке координаты
const mainMarker = L.marker(
  {
    lat: 59.968322,
    lng: 30.317359,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);
//добавляем в карту главную метку
mainMarker.addTo(map);

//no-js

const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
nav.classList.remove('navigation--nojs');

const toggleClass = () => {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
};
navToggle.addEventListener('click', () => toggleClass());

//range

const toggleMin = document.querySelector('.toggle-min');
const toggleMax = document.querySelector('.toggle-max');
const addClass = (classname, buttonName) => {
  buttonName.classList.add(`${classname}`);
};
const removeClass = (classname, buttonName) => {
  if (buttonName.classList.contains(`${classname}`)) {
    buttonName.classList.remove(`${classname}`);
  }
};
toggleMin.addEventListener('mouseover', () => addClass('toggle-min--hover', toggleMin));
toggleMin.addEventListener('mouseout', () => removeClass('toggle-min--hover', toggleMin));
toggleMax.addEventListener('mouseover', () => addClass('toggle-max--hover', toggleMax));
toggleMax.addEventListener('mouseout', () => removeClass('toggle-max--hover', toggleMax));
toggleMin.addEventListener('mousedown', () => addClass('toggle-min--active', toggleMin));
toggleMin.addEventListener('mouseup', () => removeClass('toggle-min--active', toggleMin));
toggleMax.addEventListener('mousedown', () => addClass('toggle-max--active', toggleMax));
toggleMax.addEventListener('mouseup', () => removeClass('toggle-max--active', toggleMax));

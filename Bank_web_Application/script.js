'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

//navigation visibility
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
*/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//  Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  //const slcoords = section1.getBoundingClientRect();
  // console.log(slcoords);

  // console.log('current scroll (x/y)', window.scrollX, window.scrollY);

  //window.scrollTo();

  // window.scrollTo({
  //   left: slcoords.left + window.scrollX,
  //   top: slcoords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////
///////////////////////////////////
//page navigation
// const herro = document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //Remove active Classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  tabContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  //activare content areas:
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation

const handleHover = function (el) {
  //console.log(this);

  if (el.target.classList.contains('nav__link')) {
    const link = el.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords.top);

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0.1, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//reveling elements on scroll

const allSection = document.querySelectorAll('.section');
const secCallback = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

//creating intersection
const secObserver = new IntersectionObserver(secCallback, {
  root: null,
  threshold: 0.1,
  //rootMargin: '200px',
});
//targets to observe
allSection.forEach(section => {
  secObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////////
//////////////////////////////////////////
//lazy loading images
const allImg = document.querySelectorAll('img[data-src]');
//console.log(allImg);

const imgCallback = function (entries, observer) {
  //const [entry] = entries;
  entries.forEach(entry => {
    //console.log(entry);

    if (!entry.isIntersecting) return;
    // console.log(entry);
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};
const imgObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0.5,
  //rootMargin: '-200px',
});

allImg.forEach(img => imgObserver.observe(img));

///////////////////////////////////////////
////////////////////////////////////////////
//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = function () {
    slides.forEach(function (s, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //  Next slide
  const nextSlide = function () {
    curSlide === maxSlide ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
    goToSlide(curSlide);

    activateDot(curSlide);
  };

  //initilazation
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  //event Listners
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// const eleclass = document.querySelectorAll('.section');
// eleclass.forEach(el => {
//   el.id;
//   if (el.getAttribute('id')) {
//     const ids = el.getAttribute('id');
//     console.log(ids);
//   }
// });

////////////////////////////////////
//console.log(document.documentElement);
//console.log(document.head);
// console.log(document.body);

/*const selHeader = document.querySelector('.header');
console.log(selHeader);

const allSection = document.querySelectorAll('.section');
console.log(allSection);
*/

/*const allsec = document.querySelectorAll('.section');
console.log(allsec);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

const secById = document.getElementById('section--1');

console.log(secById);
*/

//const header = document.querySelector('.header');
//console.log(header);

//const message = document.createElement('div');
//message.classList.add('cookie-message');
//console.log(message);

// message.innerHTML =
//   'we use cookies for improvrd functionality and analytics. <button class= "btn btn--close-cookie"> Got it!</button>';
//console.log(message.innerHTML);
// console.log(message);

//header.prepend(message);
//header.append(message);
//header.before(message);
// header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// message.style.backgroundColor = 'orangered';
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Math.trunc(Number.parseFloat(getComputedStyle(message).height, 0)) +
//   40 +
//   'px';

// const just = document.styleSheets[1].cssRules;
// const search = [...just].find(r => r.selectorText === '.cookie-message');
// search.style.setProperty('color', 'white');

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert("Great! you're entered into h1 element ");
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// h1.addEventListener('mouseenter', function (e) {
//   alert("Great! you're entered into h1 element 2nd time ");
// });

// h1.onmouseenter = function (e) {
//   alert("onmouseenter! you're entered into h1 element ");
// };

// h1.onmouseenter = function (e) {
//   alert('Motham swaha!');
// };
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = `${randomColor()}`;
//   console.log('LINK', e.target);
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
// });

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild.textContent);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //upwards:parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.backgroundColor = 'yellow';
// h1.closest('h1').style.backgroundColor = 'lightgreen';

// //going sideways:siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM tree is built', e);
// });

// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log('hello', e);
//   e.returnValue = ' ';
// });

// var firstName;
// console.log(firstName);
// function vowelsAndConsonants(strs) {
//   const vowels = 'aeiouAEIOU';
//   let consonants = '';
//   strs.split().forEach(str => {
//     if (vowels.includes(str)) {
//       console.log(str);
//     } else {
//       consonants += strs;
//       //console.log(consonants);
//     }
//   });
//   consonants.split().forEach(strs => {
//     console.log(strs);
//   });
// }
// vowelsAndConsonants('javascriptloop');
// function vowelsAndConsonants(s) {
//   const vowels = 'aeiouAEIOU';
//   let consonants = '';

//   s.split('').forEach(char => {
//     //console.log(char);

//     if (vowels.includes(char)) {
//       console.log(char);
//     } else {
//       consonants += char;
//     }
//   });

//   consonants.split('').forEach(char => {
//     console.log(char);
//   });
// }

// const input_string = 'javascriptloops';

// vowelsAndConsonants(input_string);

// const obj1 = {
//   name: 'ram sahu',
//   address: function () {
//     console.log('hello');
//   },
// };

// //const obj2 = { ...obj1 };
// //const obj2 = Object.assign({}, obj1);
// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name = 'jumpa lahari';
// //obj2.address.city = 'mumbai';

// console.log(obj1);
// console.log(obj2);

// Arrow function
// fun1();
// var fun1 = () => console.log('Jumpa lahari tho antha eassy kadhu');
//function expression
// fun1();
// var fun1 = function () {
//   console.log('Jumpa lahari tho antha eassy kadhu');
// };

// fun1();
// function fun1() {
//   console.log('Jumpa lahari tho antha eassy kadhu');
// }
// function secureBooking() {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// }
// const booker = secureBooking();
// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
//   //f();
// };

// g();
// f();
// console.log(foo);
// var foo = 'foo';
// console.log(foo);

//undefined => nullish value ---> no value
// var fname;
// console.log(fname);

// //null => nullish value  ---->empty values ex. "", 0...

// var lname = null;

// console.log(typeof lname);

// var length = 19;
// var breadth;
// console.log(length * breadth);

// var length1 = 19;
// var breadth1 = null;
// console.log(length1 * breadth1);
// const logo = document.querySelector('#logo');
// const headeru = document.querySelector('.header__title');

// // const locationu = document.createElement('select');

// // locationu.innerHTML = `<option>beforebegin</option> <option>afterbegin</option> <option>beforeend</option> <option>afterend</option>`;
// // headeru.prepend(locationu);

// const newEle = document.createElement('div');
// //console.log(newEle);

// newEle.innerHTML = `<p>new para</p><h3>This is heading tag</h3><i>italic</i>`;
// headeru.prepend(newEle);
// logo.addEventListener('click', function () {
//   // headeru.insertAdjacentHTML(locationu.value, `<p>jumpa</p>`);

//   newEle.textContent = `this is good`;
// });

// console.log(newEle.textContent);
// const container = document.querySelector('.container');
// container.addEventListener('click', function (e) {
//   if (e.target.classList.contains('a')) {
//     e.target.style.backgroundColor = 'red';
//   }
// });
// function rgbGenerator(max, min) {
//   return Math.trunc(Math.random() * (max - min) + min) + 1;
// }

// function rgbFormat() {
//   return `rgb(${rgbGenerator(0, 255)}, ${rgbGenerator(0, 255)}, ${rgbGenerator(
//     0,
//     255
//   )})`;
// }

// console.log(rgbFormat());

// //elder child
// document.querySelector('.link').addEventListener('click', function (e) {
//   this.style.background = rgbFormat();
// });
// //olser child
// document.querySelector('.para').addEventListener('click', function (e) {
//   this.style.background = rgbFormat();
//   this.style.width = '70px';
// });
// //parent
// document.querySelector('.container').addEventListener('click', function (e) {
//   this.style.background = rgbFormat();
// });

// var x = 10;
// function check() {
//   console.log(x);
//   //var x = 20;
// }
// check();

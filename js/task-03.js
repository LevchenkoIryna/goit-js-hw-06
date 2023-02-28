const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];



const makeGalleryCard = ({ url, alt }) => `<li >
<a >
<img src="${url}" alt="${alt}">
</a>
</li>`;

const markup = images.map((el) => makeGalleryCard(el)).join('');

const listEl = document.querySelector('.gallery');


listEl.insertAdjacentHTML('afterbegin', markup);




















// Вариант 2

// const galEl = document.querySelector('.gallery');

// const elements = images.map(option => {
//   const itemEl = document.createElement('li');
//   const linkEl = document.createElement('a');
//   const imgEl = document.createElement('img');
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;

//   itemEl.append(linkEl);
//   linkEl.append(imgEl);

//   return itemEl;
// });

// galEl.append(...elements);
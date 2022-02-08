/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Album from "./album.js";

const theAlbum = new Album(
  " Black and White",
  " Universe",
  12,
  2,
  false,
  true
);

const content = `
     <figure class="album__image">
       <img src=${theAlbum.image} alt="" />
     </figure>
     <h1 class="album__name">${theAlbum.name}</h1>
     <ul class="album__features">
     <li>Color:${theAlbum.color}</li>
     <li>Tracks:${theAlbum.tracks}</li>
     <li>Pc:${theAlbum.pc}</li>
     <li>Posters:${theAlbum.posters}</li>
     <li>Stickers:${theAlbum.stickers}</li>
     </ul>
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('backpack');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);

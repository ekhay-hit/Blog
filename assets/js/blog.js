
// const parent = document.querySelector("body");
const section = document.querySelector(".section");
const divContainer = document.querySelector(".div-container");
const modeSwitcher = document.querySelector(".modeSwitcher");
const body= document.querySelector("#bodyId");

let mode ='light';

modeSwitcher.addEventListener('click', function(){
    if (mode === 'dark') {
        mode = 'light';
        body.setAttribute('class', 'light');
      }
      // If mode is light, apply dark background
      else {
        mode = 'dark';
        body.setAttribute('class', 'dark');
      }
});


const arrBlog = JSON.parse(localStorage.getItem("blogArry"));
console.log(arrBlog);
if(arrBlog !== null){

// console.log(arrBlog);

for(let i=0; i<arrBlog.length;i++){

const newDiv = document.createElement('div') ;
newDiv.setAttribute("class", "div-element");
divContainer.appendChild(newDiv);

const title=document.createElement('h3');
title.setAttribute("class", "blog-title");
title.innerHTML=arrBlog[i].title;
newDiv.appendChild(title);

const content= document.createElement('p');
content.setAttribute("class", "blog-content");
content.innerHTML=arrBlog[i].content;
newDiv.appendChild(content);

const author = document.createElement('span');
author.innerHTML= arrBlog[i].userName;
author.setAttribute("class", "blog-author");
newDiv.appendChild(author);

}
}




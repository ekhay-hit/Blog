
// const parent = document.querySelector("body");
const section = document.querySelector(".section");
const divContainer = document.querySelector(".div-container");


for(let i=0; i<3;i++){

const newDiv = document.createElement('div') ;
newDiv.setAttribute("class", "div-element");
divContainer.appendChild(newDiv);

const title=document.createElement('h3');
title.innerHTML="Blog Title";
newDiv.appendChild(title);

const content= document.createElement('p');
content.setAttribute("class", "blog-content");
content.innerHTML="This is first b log that I am writing.";
newDiv.appendChild(content);

const author = document.createElement('span');
author.innerHTML= "create by: Houssine Khay";
author.setAttribute("class", "blog-author");
newDiv.appendChild(author);


}



// const parent = document.querySelector("body");
const section = document.querySelector(".section");
const divContainer = document.querySelector(".div-container");

const arrBlog= JSON.parse(localStorage.getItem("blogArry"));
if(arrBlog !== null){

console.log(arrBlog);

for(let i=0; i<1;i++){

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


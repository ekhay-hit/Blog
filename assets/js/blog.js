
// const parent = document.querySelector("body");
const section = document.querySelector(".section");
const divContainer = document.querySelector(".div-container");
const modeSwitcher = document.querySelector(".modeSwitcher");
const body= document.querySelector("#bodyId");
// set mode to light class
let mode ='light';
// event listner for switch mode button
modeSwitcher.addEventListener('click', function(){
  // check if mode is dark
    if (mode === 'dark') {
        mode = 'light';
        // set attrivute to class light
        body.setAttribute('class', 'light');
      }
      // If mode is light, apply dark background
      else {
        mode = 'dark';
        //if mode is ligh set attribute to dark
        body.setAttribute('class', 'dark');
      }
});

// get blogArray from local storage and assign it to arrBlog
const arrBlog = JSON.parse(localStorage.getItem("blogArry"));
// check if local storage not impty, if not proceed
if(arrBlog !== null){
// loop to itirate through arrBlog
for(let i=0; i<arrBlog.length;i++){
// create div and set attribute to the append it to divContainer
const newDiv = document.createElement('div') ;
newDiv.setAttribute("class", "div-element");
divContainer.appendChild(newDiv);
// create header 3 add title to it and append it newDiv
const title=document.createElement('h3');
title.setAttribute("class", "blog-title");
title.innerHTML=arrBlog[i].title;
newDiv.appendChild(title);
// create <p> add content to it and append it newDiv
const content= document.createElement('p');
content.setAttribute("class", "blog-content");
content.innerHTML=arrBlog[i].content;
newDiv.appendChild(content);
// create <span> add author to it and append it newDiv
const author = document.createElement('span');
author.innerHTML= arrBlog[i].userName;
author.setAttribute("class", "blog-author");
newDiv.appendChild(author);
}
}




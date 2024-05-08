// const form = document.getElementById("form-id");
const userNameInput = document.querySelector("#user-name");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitBtn = document.querySelector("#btn");

// selector for backgroun theme selector
const modeSwitcher = document.querySelector(".modeSwitcher");
const body = document.querySelector("#bodyId");
let mode = 'light';
let blogArry;
if (localStorage.getItem("blogArry")=== null){
      blogArry=[];
}else{
  blogArry=JSON.parse(localStorage.getItem("blogArry"));
}
function storeBlog(){
    localStorage.setItem('blogArry',JSON.stringify(blogArry));
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
//   console.log("I am here before get attribut");
  const users = userNameInput.value;
  const title = titleInput.value;
  const content = contentInput.value.trim();
//   console.log("I am here after get attribut");
//   console.log(`This is username ${users}`);
  const blog = {
    userName: users,
    title: title,
    content: content,
  };

  blogArry.push(blog);
  console.log(blogArry);
//   localStorage.setItem('blogArry',JSON.stringify(blogArry));
storeBlog();
  userNameInput.value ='';
  titleInput.value ='';
  contentInput.value = '';
});


// implementation to back ground mode.

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
})


const form = document.getElementById("form-id");
const userNameInput = document.querySelector("#user-name");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitBtn = document.querySelector("#btn");

const blogArry = [];

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

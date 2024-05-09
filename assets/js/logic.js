// const form = document.getElementById("form-id");
const userNameInput = document.querySelector("#user-name");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitBtn = document.querySelector("#btn");

// selector for backgroun theme selector
const modeSwitcher = document.querySelector(".modeSwitcher");
// selector for the body
const body = document.querySelector("#bodyId");
// set mode to light
let mode = "light";
// create a varaible 
let blogArry;
// check if the varaible array has any values if not initialize an empty array
if (localStorage.getItem("blogArry") === null) {
  blogArry = [];
  // if there are items in local storage get items and assinged to the array
} else {
  blogArry = JSON.parse(localStorage.getItem("blogArry"));
}

// function to story object of the blog
function storeBlog() {
  localStorage.setItem("blogArry", JSON.stringify(blogArry));
}
 // even listner for form submit button
submitBtn.addEventListener("click", function (e) {
  // prevent the page to refresh
  e.preventDefault();
  // check if the input are not empty, if empty sent alert
  if ((userNameInput.value === "") || (titleInput.value === "") || (contentInput.value ==="")) {
   
    alert("Please complete the form");
  } else {
  
    // if inputs are not empty get the value and assined them to the follwoing varaibles
    
    const users = userNameInput.value;
    const title = titleInput.value;
    const content = contentInput.value.trim();
    // create an object blog
    const blog = {
      userName: users,
      title: title,
      content: content,
    };
    // push object to the array
    blogArry.push(blog);
   
    //   call the function to store the opject in local storage
    storeBlog();
    // open windows blog 
    window.open("/blog.html");
    // empty the form input 
    userNameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
  }
});

// implementation to back-ground mode.
// eventListner for the swithc mode button
modeSwitcher.addEventListener("click", function () {
  // check mode value and switch accordinally 
  if (mode === "dark") {
    mode = "light";
    // set the attribute to light mode
    body.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    // set attribute to dark mode by adding class dark to body
    body.setAttribute("class", "dark");
  }
});

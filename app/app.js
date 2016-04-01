import 'es6-promise';
import 'whatwg-fetch';


fetch(" https://api.github.com/users/nickgarlington")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);

    document.querySelector("#avatar").src = response.avatar_url;
    document.querySelector("#name").textContent = response.name;
    document.querySelector("#username").textContent = response.login;
    document.querySelector("#location").textContent = response.location;
    let blog = document.querySelector("#blog")
    blog.textContent = response.blog;
    blog.href = response.blog;

    let email = document.querySelector("#email")
    email.textContent = response.email;
    email.href = `mailto: ${response.email}`;
    document.querySelector("#email").textContent = response.email;
  })

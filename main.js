const form = document.querySelector(".form");
const inputUsername = document.querySelector('.form input[type="text"]');
const inputPassword = document.querySelector('.form input[type="password"]');

const url = "https://dummyjson.com";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = {
    // username: emilys
    // password: emilyspass
    username: inputUsername.value,
    password: inputPassword.value,
  };
  console.log(user);

  fetch(`${url}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error("xato");
    })

    .then((res) => {
      open("/pages/dashboard.html", "_self");
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => console.log("tugadi"));
});

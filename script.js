// REGISTER FORM
function register(){

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const user = {
    userid: "kodom01",
    username: username,
    email: email,
    phone: phone,
    password: btoa(password)
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful");
  window.location.href="login.html";
}

// LOGIN FORM
function login(){

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if(storedUser && username === storedUser.username && btoa(password) === storedUser.password){
      alert("Login successful");
      window.location.href="home.html";
  }else{
      alert("Invalid login");
  }
}
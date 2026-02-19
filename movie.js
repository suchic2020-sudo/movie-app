
// check login session
const user = JSON.parse(localStorage.getItem("user"));

if(!user){
  alert("Please login first");
  window.location.href = "login.html";
}
// SHOW LOGGED USER NAME

  document.getElementById("welcome").innerText =
  "Welcome " + user.username;

const API_KEY = "fbfbd08f08f5579c2d3c03148ce67756";
const movieContainer = document.getElementById("movie-container");
const searchInput = document.getElementById("search");

// fetch popular movies
async function getMovies(query = "popular") {
  let url;

  if (query === "popular") {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

// show movies
function showMovies(movies) {
  movieContainer.innerHTML = "";

  movies.forEach(movie => {
    const movieCard = document.createElement("div");

    movieCard.innerHTML = `
      <h3>${movie.title}</h3>
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" />
    `;

    movieContainer.appendChild(movieCard);
  });
}

// search
searchInput.addEventListener("keyup", e => {
  getMovies(e.target.value);
});

// load movies first time
getMovies();
function logout(){
  localStorage.removeItem("user");
  alert("Logged out successfully");
  window.location.href = "login.html";
}
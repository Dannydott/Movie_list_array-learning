// Initialize empty array to store movies
const movies = [];

// Get references to DOM elements
const movieInput = document.getElementById("movieInput");
const addButton = document.getElementById("addButton");
const movieList = document.getElementById("movieList");

addButton.addEventListener("click", function () {
  // adds an event listener to know when someone clicks the addButton.
  const movieTitle = movieInput.value; // creates a constant variable which has the value of the text input into the Input field.
  movies.push(movieTitle); // pushes the movieTitle which contains the text from the input field into the new array which is movies.
  movieInput.value = ""; // makes the text field in the input empty
  updateMovieList(); // runs the next function below.
});

// Update movie list
function updateMovieList() {
  // creates function called updateMovieList
  movieList.innerHTML = ""; // makes the movie list within the HTML empty.
  for (let i = 0; i < movies.length; i++) {
    // uses a loop to irriate over each item within the movies array.
    const movie = movies[i]; // retrieves each item from the array and saves it to a variable called movie.
    const movieListItem = document.createElement("li"); // creates a list item and saves it to a variable.
    movieListItem.setAttribute("class", "list-item");
    movieListItem.textContent = movie; // takes the information which is a movie which was taken from the loop and saves it into the list item.
    const deleteButton = document.createElement("button"); // creates a delete button and saves it to a variable.
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.textContent = "Delete"; // writes delete inside the button
    deleteButton.addEventListener("click", function () {
      // adds an event listener to the delete button, waiting for someone to click it.
      movies.splice(i, 1); // deletes the most recent one which was clicked.
      updateMovieList(); // runs the code again.
    });
    movieListItem.appendChild(deleteButton);
    movieList.appendChild(movieListItem);
  }
}

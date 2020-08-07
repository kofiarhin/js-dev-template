require("../css/styles.sass");
const Movies = require("./models/movies");


const movies = new Movies();


const state = {

    movies: []
}


init();

async function init() {

    const data = await movies.getMovies();
    state.movies = data;

    if (state.movies && state.movies.length > 0) {

        const { movies } = state;

        renderMovies(movies)
    }

}



function renderMovies(data) {

    data.forEach(item => {

        let element = document.createElement("h1");
        element.textContent = item.title;

        document.querySelector("body").insertAdjacentElement("beforeend", element);
    });
}
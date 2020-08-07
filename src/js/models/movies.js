const axios = require("axios");

class Movies {

    constructor() {

        console.log("movie create")
    }


    async getMovies() {

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1`

        console.log(url);
    }
}

module.exports = Movies;
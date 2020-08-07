const axios = require("axios");

class Movies {


    async getMovies() {

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1`

        const data = await axios.get(url).then(response => response.data.results);

        return data;

    }
}

module.exports = Movies;
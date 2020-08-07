class Movies {

    constructor() {

        console.log("movie create")
    }


    async getMovies() {

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1`
        const data = await fetch(url).then(response => response.json()).then(result => result.results);

        return data;
    }
}

module.exports = Movies;
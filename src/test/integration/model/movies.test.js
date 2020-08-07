const Movies = require("../../../js/models/movies");


describe("movies", () => {

    it("should return list of users", async () => {

        const movies = new Movies();
        const data = await movies.getMovies();

        expect(data.length).toBeGreaterThan(0);

    });

});
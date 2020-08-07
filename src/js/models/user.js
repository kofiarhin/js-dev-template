class User {

    constructor() {

        console.log('tnis is the  use class')
    }

    getUsers() {

        return [
            {
                name: "kofi arhin",
                password: "password"
            },

            {
                name: "lebron james",
                password: "password"
            }
        ]
    }
}


module.exports = User;
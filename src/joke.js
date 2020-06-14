var oneLinerJoke = require("one-liner-joke");

module.exports = class Joke {
    static getJoke() {
        var getRandomJoke = oneLinerJoke.getRandomJoke({
            'exclude_tags': ['dirty', 'racist', 'marriage']
        });
        return getRandomJoke.body;

    }
}
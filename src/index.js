var math = require('./math');
var joke = require('./joke');
var axiosTest = require('./axiosTest');


for (let i = 0; i < 16; i++) {
    if (i >= 1 && i <= 7) {
        console.log(math.fibonacci(i));
    } else if (i >= 8 && i <= 16) {

        console.error(math.fibonacci(i));
    }
}

console.log("Żart:")
console.log(joke.getJoke());

console.log("Zapytanie API:")
axiosTest.getData();

process.exit(0);
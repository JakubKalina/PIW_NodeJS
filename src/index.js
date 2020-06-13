var math = require('./math');


for (let i = 0; i < 16; i++) {
    if (i >= 1 && i <= 7) {
        console.log(math.fibonacci(i));
    } else if (i >= 8 && i <= 16) {

        console.error(math.fibonacci(i));
    }
}

process.exit(0);
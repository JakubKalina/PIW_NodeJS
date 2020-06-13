function fibonacci(n) {
    if (n === 0) return 0;
    else if (n <= 2) return 1;

    const f = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[f.length - 1];
}


for (let i = 0; i < 16; i++) {
    if (i >= 1 && i <= 7) {
        console.log(fibonacci(i));
    } else if (i >= 8 && i <= 16) {

        console.error(fibonacci(i));
    }
}

process.exit(0);